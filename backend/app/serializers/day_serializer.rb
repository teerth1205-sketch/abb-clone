class DaySerializer < ActiveModel::Serializer
    attributes :id, :user, :listing_id
    belongs_to :user
    
  end