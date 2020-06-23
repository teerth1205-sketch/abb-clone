class ListingsController < ApplicationController
    def create
       listing =  Listing.create(listing_params)
       
       render json: listing
    end 
    
    def index
        listings = Listing.all
        render json: listings
    end 
    
    private
    
     def listing_params
        params.require(:listing).permit(:location, :summary, :price, :name)
     end 
    
    
end 