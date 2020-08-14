class UserSerializer < ActiveModel::Serializer
    attributes :name 
    has_many :days
    has_many :listings

    
  end