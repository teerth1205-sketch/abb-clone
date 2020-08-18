class DaySerializer < ActiveModel::Serializer
    attributes :id, :date, :user, :listing_id
    belongs_to :user
    
  end 