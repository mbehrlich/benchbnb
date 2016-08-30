class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def ensure_login
    unless current_user
      @errors = ["Error: Forbidden"]
      render json: @errors, status: 404
    end
  end

  def ensure_logout
    if current_user
      p current_user
      @errors = ["Error: already logged in"]
      render json: @errors
    end
  end

end
