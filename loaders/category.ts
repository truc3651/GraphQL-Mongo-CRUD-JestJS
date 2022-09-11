import CategoryService from "../services/category";
import { groupBy } from "../utils/common";
const categoryService = new CategoryService();

export const fetchCategoryByNews = async (categoryIds) => {
  const data = await categoryService.list({
    condition: {
      _id: { $in: categoryIds },
    },
    limit: 100,
  });
  return groupBy(data.data, categoryIds);
};
