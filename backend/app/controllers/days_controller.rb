class DaysController < ApplicationController
    
    def create 
        day = Day.create(day_params)
        render json: day
    end 
    
    def index
        days = Day.all
        render json: days
    end 
    
    private
    
    def day_params
        params.require(:day).permit(:date, :user_id, :listin_id) 
    end
    
end 