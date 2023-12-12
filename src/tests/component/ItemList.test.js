// ItemList.test.js

import React from 'react'
import { render } from '@testing-library/react'
import ItemList from '../../component/itemList/ItemList'

test('renders item list correctly', () => {
  // Arrange
  const items = ['Item 1', 'Item 2', 'Item 3']

  // Act
  const { getByText } = render(<ItemList items={items} />)

  // Assert
  expect(getByText('Item List')).toBeInTheDocument()
  expect(getByText('Item 1')).toBeInTheDocument()
  expect(getByText('Item 2')).toBeInTheDocument()
  expect(getByText('Item 3')).toBeInTheDocument()
})
