class HouseholdSerializer < ActiveModel::Serializer
  attributes :id, :name

  embed :ids
  has_many :visits, include: true

  def visits
    [object.visits.find_or_create_by(month: Date.today.beginning_of_month - 1.month), object.visits.find_or_create_by(month: Date.today.beginning_of_month)]
  end
end