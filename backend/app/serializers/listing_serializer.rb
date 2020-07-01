class ListingSerializer < ActiveModel::Serializer
    attributes :id, :location, :summary, :price
    has_many :days
    belongs_to :user
    
  end