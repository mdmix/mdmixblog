class ApplicationController < ActionController::Base
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.root_url, alert: exception.message
  end

  def authenticate_user!
    redirect_back(fallback_location: articles_url, alert: 'Only Admins can make changes') unless user_signed_in?
  end

end
