class User < ApplicationRecord
    has_secure_password

    has_many :cars

    validates :last_name, :first_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, presence: true, confirmation: true
end
