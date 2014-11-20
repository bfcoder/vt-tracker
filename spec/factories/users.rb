FactoryGirl.define do
  factory :user do
    email { FactoryGirl.generate(:email) }
    password { FactoryGirl.generate(:password) }
    password_confirmation {|u| u.password}
  end

end