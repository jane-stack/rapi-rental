class UsersController < ApplicationController

    def show
        render json: current_user
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: @user, status: 201
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:last_name, :first_name, :email, :password, :password_confirmation)
    end
end
