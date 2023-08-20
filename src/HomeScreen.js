import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';

const API_KEY = 'ea1810cf5b6ec58e2e54d395bb998e45';
const API_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s`;

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(API_URL);
      const newPhotos = response.data.photos.photo;
      setPhotos(newPhotos);

    
      await AsyncStorage.setItem('cachedPhotos', JSON.stringify(newPhotos));
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FastImage
            style={{ width: 100, height: 100 }}
            source={{ uri: item.url_s }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
