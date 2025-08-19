import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem =>
    mealItem.categoryIds.includes(catId)
  );

  useEffect(() => {
    // Sets title of screen dynamically. This is the title next to the back button.
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
