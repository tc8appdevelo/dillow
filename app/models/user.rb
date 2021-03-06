class User < ApplicationRecord
    validates :email, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    after_initialize :ensure_session_token

    has_many :saved_houses,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :SavedHouse
    
    has_many :listings,
        through: :saved_houses

    has_many :selling_houses,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Listing

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        end

        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
