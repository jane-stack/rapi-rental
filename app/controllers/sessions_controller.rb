class SessionsController < ApplicationController

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Username or Password didn't match"] }, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "Successfully logged out" }
    end
end
