
class ShortenedUrl < ApplicationRecord
    validates :long_url, :submitter_id, presence: true
    validates :short_url, presence: true, uniqueness: true


    def self.random_code
        loop do
            random_code = SecureRandom.urlsafe_base64(16)
            return random_code unless ShortenedUrl.exist?(short_url: random_code)
        end
    end

    def self.url_shortener(user, long_url)
        ShortenedUrl.create!()
    end
end