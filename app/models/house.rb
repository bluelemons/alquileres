class House < ActiveRecord::Base

  geocoded_by :full_address
  after_validation :geocode

  validates :address, presence: true

  def full_address
    address + ", Santa Fe, Santa Fe, Argentina"
  end
end
