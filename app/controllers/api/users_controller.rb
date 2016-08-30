class Api::UsersController < ApplicationController

  before_action :ensure_logout

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render json: errors
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
