import PropTypes from "prop-types";
import { CollectionItemSchema } from "@components/shop/collection-item/collection-item.schema";

export const CollectionSchema = {
  items: PropTypes.arrayOf(PropTypes.shape(CollectionItemSchema)),
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
