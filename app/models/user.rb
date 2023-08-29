class User < ApplicationRecord
    has_secure_password

    has_many :user_cars, foreign_key: "owner_id", class_name: "Car"
    has_many :cars, dependent: :destroy
    has_many :car_reviews, through: :cars, source: :car

    before_save { email.downcase! }
    before_validation :capitalize_names
    validates :last_name, :first_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, presence: true, confirmation: true, length: { minimum: 8 }

    validate :password_requirements

    private

    def capitalize_names
        self.first_name = first_name.titleize if first_name.present?
        self.last_name = last_name.titleize if last_name.present?
    end

    def password_requirements
        return if password.blank?

        unless password.match?(/[a-z]/)
            errors.add(:password, "must contain one lowercase letter")
        end

        unless password.match?(/[A-Z]/)
            errors.add(:password, "must contain one uppercase letter")
        end

        unless password.match?(/\d/)
            errors.add(:password, "must contain one digit")
        end

        unless password.match?(/[[:^alnum:]]/)
            errors.add(:password, "must contain one special character")
        end
    end
end
