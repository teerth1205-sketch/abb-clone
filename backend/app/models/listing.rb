class Listing < ApplicationRecord
  has_many :days
   belongs_to :user,  required: false
   include Rails.application.routes.url_helpers

     def name=(name)
        if User.find_by(name: name)
           user = User.find_by(name: name)
           self.user_id = user.id
        else
            User.create(name: name)
            user = User.find_by(name: name)
            self.user_id = user.id
        end 
    end 
end
