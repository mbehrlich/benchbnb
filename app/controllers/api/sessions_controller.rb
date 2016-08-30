class Api::SessionsController < ApplicationController

  before_action :ensure_login, only: [:destroy]
  before_action :ensure_logout, only: [:create]

  def create
    @user = User.find_user_by_credentials(session_params[:username], session_params[:password])
    p @user
    if @user
      login(@user)
      render :show
    else
      @errors = ["Error: username and/or password doesn't match records"]
      render json: @errors
    end
  end

  def destroy
    p current_user
    logout
    render json: {}
  end

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
