
export const filters = (query) => {
  const filters = {};

  if(query.type) filters.type=query.type;

  if (query.state) filters.state = query.state;

  if (query.city) filters.city = query.city;

  if (query.listingType) filters.listingType = query.listingType;

  if (query.listedBy) filters.listedBy = query.listedBy;
  if (query.furnished) filters.furnished = query.furnished;

  if (query.isVerified !== undefined) filters.isVerified = query.isVerified === 'true';
  
  if (query.minPrice || query.maxPrice) {
    filters.price = {};
    if (query.minPrice) filters.price.$gte = Number(query.minPrice);
    if (query.maxPrice) filters.price.$lte = Number(query.maxPrice);
  }

  if (query.minArea || query.maxArea) {
    filters.areaSqFt = {};
    if (query.minArea) filters.areaSqFt.$gte = Number(query.minArea);
    if (query.maxArea) filters.areaSqFt.$lte = Number(query.maxArea);
  }

  if (query.bedrooms) filters.bedrooms = Number(query.bedrooms);
  if (query.bathrooms) filters.bathrooms = Number(query.bathrooms);

  if (query.availableFrom) {
    filters.availableFrom = { $gte: new Date(query.availableFrom) };
  }

  if (query.minRating) filters.rating = { $gte: Number(query.minRating) };

  if (query.amenities) {
    const amenities = query.amenities.split(',');
    filters.amenities = { $regex: amenities.join('|'), $options: 'i' };
  }

  if (query.tags) {
    const tags = query.tags.split(',');
    filters.tags = { $regex: tags.join('|'), $options: 'i' };
  }


  return filters;
};


