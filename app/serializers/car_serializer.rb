class CarSerializer < ActiveModel::Serializer
    attributes :id, :name, :make, :model, :year
end