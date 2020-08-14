class DaysController < ApplicationController
    
    def create 
        user = User.find_or_create_by(name: params["username"])
        day = user.days.create(day_params)
        render json: day
    end 
    
    def index
        days = Day.all
        render json: days
    end 
    
    private
    
    def day_params
        params.require(:day).permit(:date, :username, :user_id, :listing_id) 
    end
    
end 