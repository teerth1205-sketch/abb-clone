class User < ApplicationRecord
    has_many :listings
    has_many :days

    
end
