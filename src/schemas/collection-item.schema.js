import PropTypes from 'prop-types'

export const CollectionItemSchema = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
};

