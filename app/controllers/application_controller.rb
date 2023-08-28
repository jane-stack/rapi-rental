class ApplicationController < ActionController::API
    include ActionController::Cookies

    def logged_in?
        session[:user_id]
    end

    def current_user
        user = User.find_by_id(session[:user_id])
    end

    def authorize
        render json: { errors: ["Please login"] }, status: :unauthorized unless logged_in?
    end

    def authorize_user_resource(user_id)
        render json: { errors: ["You must be logged in"] }, status: :unauthorized unless user_id === current_user.id
    end
end
