import { theme } from '@styles/theme';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { DefaultListProps } from './types';

export const DefaultList = <ItemT extends any>({
  data,
  renderItem,
  ListHeaderComponent,
}: DefaultListProps<ItemT>) => {
  const getItemLayout = useCallback(
    (data: any[] | null, index: number) => ({
      length: 150,
      offset: 150 * index,
      index,
    }),
    [],
  );
  const renderSeparator = () => (
    <View
      style={{
        marginVertical: theme.spacings.nano,
      }}
    />
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item?.id}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      initialNumToRender={2}
      maxToRenderPerBatch={3}
      windowSize={5}
      removeClippedSubviews={true}
      bounces={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      getItemLayout={getItemLayout}
    />
  );
};
