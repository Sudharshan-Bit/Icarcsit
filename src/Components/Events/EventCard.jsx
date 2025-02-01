import React from 'react';

const events = [
  { title: 'Tech Conference 2025', date: 'March 10, 2025', description: 'A conference about the latest in tech.', image: 'https://via.placeholder.com/300' },
  { title: 'Art Expo', date: 'April 5, 2025', description: 'Showcasing modern art from around the world.', image: 'https://via.placeholder.com/300' },
  { title: 'Music Festival', date: 'May 15, 2025', description: 'A festival featuring top artists.', image: 'https://via.placeholder.com/300' },
  { title: 'Startup Summit', date: 'June 20, 2025', description: 'Meet entrepreneurs and investors.', image: 'https://via.placeholder.com/300' },
  { title: 'Coding Bootcamp', date: 'July 12, 2025', description: 'Intensive coding sessions for beginners.', image: 'https://via.placeholder.com/300' },
  { title: 'Health & Wellness Fair', date: 'August 8, 2025', description: 'Learn about fitness and nutrition.', image: 'https://via.placeholder.com/300' },
  { title: 'Film Screening', date: 'September 18, 2025', description: 'Watch and discuss indie films.', image: 'https://via.placeholder.com/300' },
  { title: 'Book Launch', date: 'October 3, 2025', description: 'A new book release with the author.', image: 'https://via.placeholder.com/300' },
  { title: 'Gaming Convention', date: 'November 14, 2025', description: 'Experience the latest in gaming.', image: 'https://via.placeholder.com/300' },
  { title: 'Charity Gala', date: 'December 25, 2025', description: 'A night of giving back.', image: 'https://via.placeholder.com/300' }
];

export default function EventCard() {
  return (
    <div className="max-w-[80rem] mx-auto overflow-x-auto whitespace-nowrap p-6">
      <div className="flex gap-6">
        {events.map((event, index) => (
          <div key={index} className="min-w-[300px] rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{event.date}</p>
              <p className="text-gray-700 text-base mb-4">{event.description}</p>
              <button className="w-full py-2 bg-yellow-300 text-white font-semibold hover:bg-yellow-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
