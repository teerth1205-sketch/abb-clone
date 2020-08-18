class UserSerializer < ActiveModel::Serializer
    attributes :name , :id
    has_many :days
    has_many :listings

    
  end