class Food < ApplicationRecord
  validates_uniqueness_of :name

end
