import { useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { CheckBox } from "../../ui/CheckBox";

type Props = {
    filters: {
      size: number | null;
      allowedOnRoad: boolean | null;
      allowsHeavy: boolean | null;
      perTonneOnly: boolean;
    };
    setFilters: (v: any) => void;
  };
  
  export const FilterPanel = ({ filters, setFilters }: Props) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return (
      <div className={styles.filterPanel}>
        <Button classname={(filters.allowedOnRoad ||  filters.allowsHeavy || filters.perTonneOnly || filters.size) ? styles.gold : ""} onClick={()=>setIsFilterOpen(prev=>!prev)}>{(filters.allowedOnRoad ||  filters.allowsHeavy || filters.perTonneOnly || filters.size) ? "Filter is Used" : "Use Filter"}</Button>
        <Modal isVisible={isFilterOpen} title={"Filter's parameters"} content="CHOOSE FILTER" children={<div className= {styles.filterContainer}>
          <div className={styles.wrapper}>
            <label className={styles.labelStyle}>Size:
            <select title="Size"
              value={filters.size ?? ""}
              onChange={(e) => setFilters((prev: any) => ({ ...prev, size: e.target.value ? Number(e.target.value) : null }))}
              className={styles.boxSize}
            >
              <option value="">All Sizes</option>
              {[4, 6, 8, 10, 12, 14, 16, 20, 40].map((s) => (
                <option key={s} value={s}>
                  {s} yd³
                </option>
              ))}
            </select>
            </label>
            <CheckBox id="On Road Only" checked={filters.allowedOnRoad ?? false} onChange={() =>
                setFilters((prev: any) => ({
                  ...prev,
                  allowedOnRoad: prev.allowedOnRoad === true ? null : true,
                }))} title={"On Road Only"}>On Road Only</CheckBox>
            <CheckBox id="Heavy Waste" checked={filters.allowsHeavy ?? false} onChange={() =>
                  setFilters((prev: any) => ({
                    ...prev,
                    allowsHeavy: prev.allowsHeavy === true ? null : true,
                  }))
                } title={"Heavy Waste"}>Heavy Waste</CheckBox>
            <CheckBox id="Per-Tonne Only" checked={filters.perTonneOnly} onChange={() =>
                  setFilters((prev: any) => ({
                    ...prev,
                    perTonneOnly: !prev.perTonneOnly,
                  }))
                } title={"Per-Tonne Only"}>Per-Tonne Only</CheckBox>
          </div>
        </div>} onClose={() => setIsFilterOpen(false)} />
      </div>
    );
  };
  