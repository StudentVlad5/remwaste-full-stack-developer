import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { FilterPanel } from "../FilterPanel";
import { RootState } from "../../../store/ReduxStore";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import Footer from "../Footer";

// Assuming quizList is an array, infer its item type from RootState
type Product = RootState["QuizReducer"]["quizList"][number];

export const ProductGrid = () => {
  const [filters, setFilters] = useState({
    size: null,
    allowedOnRoad: null,
    allowsHeavy: null,
    perTonneOnly: false,
  });

  const data = useSelector((state: RootState) => state.QuizReducer.quizList || [])
  const [filtered, setFiltered] = useState(data);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [orderedItems, setOrderedItems] = useState<Product[]>([]);

  useEffect(() => {
    setFiltered(data); 
  }, [data]);

  useEffect(() => {
    let result = [...data];
    if (filters.size) result = result.filter((x) => x.size === filters.size);
    if (filters.allowedOnRoad !== null)
      result = result.filter((x) => x.allowed_on_road === filters.allowedOnRoad);
    if (filters.allowsHeavy !== null)
      result = result.filter((x) => x.allows_heavy_waste === filters.allowsHeavy);
    if (filters.perTonneOnly)
      result = result.filter((x) => x.per_tonne_cost !== null);

    setFiltered(result);
  },[data, filters])


  useEffect(() => {
    const ordered: Product[] = [];
    selectedItems.forEach(id => {
      const found = data.find(item => item.id === id);
      if (found) ordered.push(found);
    });
    setOrderedItems(ordered);
  }, [selectedItems, data]);

  const toggleSelectedItem = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ?  prev.map(it => it === id ? 0 : it).filter(it => it !== 0)
        : [...prev, id]
    );
  };

console.log(orderedItems)
  return (
    <div className={styles.GridContainer}>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div className={styles.grid}>
        {filtered.map((item) => (
           <ProductCard key={item.id} item={item}  toggleSelectedItem={toggleSelectedItem}/>
        ))}
      </div>
      <Footer orderedItems={orderedItems}/>
    </div>
  );
};
