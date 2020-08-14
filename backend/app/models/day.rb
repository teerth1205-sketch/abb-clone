class Day < ApplicationRecord
    belongs_to :user,  required: false
    belongs_to :listing,  required: false

    def username=(username)
        if User.find_by(name: username)
           user = User.find_by(name: username)
           self.user_id = user.id
        else
            User.create(name: username)
            user = User.find_by(name: username)
            self.user_id = user.id
        end
    end 
end
