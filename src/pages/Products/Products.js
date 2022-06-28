import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error, data} = useFetch(Config.API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading size="large" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderProduct}
        onSelect={handleProductSelect}
      />
    </>
  );
};

export default Products;
