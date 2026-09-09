"use client";
import { useEffect, useMemo, useState } from "react";
import { useData } from "./utils/dataProvider";

const WindowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect
      x="2.5"
      y="2.5"
      width="15"
      height="15"
      rx="1.5"
      stroke="#C81127"
      strokeWidth="1.4"
    />
    <path d="M10 2.5V17.5M2.5 10H17.5" stroke="#C81127" strokeWidth="1.4" />
  </svg>
);

const DoorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect
      x="4"
      y="2.5"
      width="12"
      height="15"
      rx="1.5"
      stroke="#C81127"
      strokeWidth="1.4"
    />
    <circle cx="12.8" cy="10" r="0.9" fill="#C81127" />
  </svg>
);

const CalcIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect
      x="3"
      y="1.5"
      width="14"
      height="17"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect x="6" y="4.5" width="8" height="3" rx="0.75" fill="currentColor" />
    <circle cx="7" cy="11" r="1" fill="currentColor" />
    <circle cx="10" cy="11" r="1" fill="currentColor" />
    <circle cx="13" cy="11" r="1" fill="currentColor" />
    <circle cx="7" cy="14.5" r="1" fill="currentColor" />
    <circle cx="10" cy="14.5" r="1" fill="currentColor" />
    <circle cx="13" cy="14.5" r="1" fill="currentColor" />
  </svg>
);

// "12.5" ч, "12,5" ч зөвшөөрнө. Хоосон эсвэл сөрөг бол 0.
const toNumber = (value) => {
  const num = parseFloat(String(value).replace(",", "."));
  return Number.isFinite(num) && num > 0 ? num : 0;
};

const formatMnt = (value) => `${Math.round(value).toLocaleString("en-US")}₮`;

const NumberField = ({ id, label, icon, value, onChange }) => (
  <div className="flex flex-col gap-2 w-full">
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0B0B0B]"
    >
      {icon}
      {label}
    </label>
    <input
      id={id}
      type="number"
      inputMode="decimal"
      min="0"
      step="0.01"
      placeholder="0.0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-11 md:h-12 rounded-lg border border-[#E5E5E5] px-3 md:px-4 text-sm md:text-base text-[#0B0B0B] placeholder:text-[#B5B5B5] outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
    />
  </div>
);

export const Calculator = ({ onClose }) => {
  const { blockSizes, blockPrice } = useData();
  const sizes = Array.isArray(blockSizes) ? blockSizes : [];
  const prices = blockPrice || { withVat: 0, withoutVat: 0 };

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [windowArea, setWindowArea] = useState("");
  const [doorArea, setDoorArea] = useState("");
  const [sizeName, setSizeName] = useState(sizes[sizes.length - 1]?.name || "");
  const [withVat, setWithVat] = useState(true);

  // Модал нээлттэй үед ард талын гүйлгэлтийг зогсоох + Esc товчоор хаах
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const selectedSize = useMemo(
    () => sizes.find((s) => s.name === sizeName) || sizes[0],
    [sizes, sizeName]
  );

  const result = useMemo(() => {
    const L = toNumber(length);
    const W = toNumber(width);
    const H = toNumber(height);
    const openings = toNumber(windowArea) + toNumber(doorArea);

    // Барилгын периметрийн ханын талбайгаас цонх, хаалганы талбайг хасна
    const grossWallArea = 2 * (L + W) * H;
    const netWallArea = Math.max(0, grossWallArea - openings);

    const thicknessM = (selectedSize?.thickness || 0) / 1000;
    const blockVolume =
      thicknessM *
      ((selectedSize?.height || 0) / 1000) *
      ((selectedSize?.length || 0) / 1000);

    const totalVolume = netWallArea * thicknessM;
    const pieces = blockVolume > 0 ? Math.ceil(totalVolume / blockVolume) : 0;
    const unitPrice = withVat ? prices.withVat : prices.withoutVat;

    return {
      totalVolume,
      pieces,
      unitPrice,
      totalPrice: totalVolume * unitPrice,
    };
  }, [
    length,
    width,
    height,
    windowArea,
    doorArea,
    selectedSize,
    withVat,
    prices,
  ]);

  const reset = () => {
    setLength("");
    setWidth("");
    setHeight("");
    setWindowArea("");
    setDoorArea("");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/50 p-3 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calculator-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[720px] my-auto bg-white rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Толгой хэсэг */}
        <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-4 md:py-5 border-b border-[#E5E5E5]">
          <h2
            id="calculator-title"
            className="text-base md:text-xl font-bold text-[#002672]"
          >
            Хэрэгцээт блокийн хэмжээг тооцоолох
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Хаах"
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#0B0B0B] hover:bg-[#F4F4F4]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 md:gap-6 px-4 md:px-8 py-5 md:py-6">
          {/* Барилгын хэмжээ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <NumberField
              id="calc-length"
              label="Урт, метр"
              value={length}
              onChange={setLength}
            />
            <NumberField
              id="calc-width"
              label="Өргөн, метр"
              value={width}
              onChange={setWidth}
            />
            <NumberField
              id="calc-height"
              label="Өндөр, метр"
              value={height}
              onChange={setHeight}
            />
          </div>

          <NumberField
            id="calc-windows"
            label="Цонхны нийт м²"
            icon={<WindowIcon />}
            value={windowArea}
            onChange={setWindowArea}
          />
          <NumberField
            id="calc-doors"
            label="Хаалганы нийт м²"
            icon={<DoorIcon />}
            value={doorArea}
            onChange={setDoorArea}
          />

          {/* Блокын төрөл */}
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="calc-size"
              className="text-xs md:text-sm font-semibold text-[#0B0B0B]"
            >
              Блокын төрөл
            </label>
            <select
              id="calc-size"
              value={selectedSize?.name || ""}
              onChange={(e) => setSizeName(e.target.value)}
              className="w-full h-11 md:h-12 rounded-lg border border-[#E5E5E5] px-3 md:px-4 text-sm md:text-base text-[#0B0B0B] bg-white outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
            >
              {sizes.map((size) => (
                <option key={size.name} value={size.name}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          {/* НӨАТ-ын сонголт */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-xs md:text-sm font-semibold text-[#0B0B0B]">
              Нэгж үнэ /1 м³/
            </span>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                { vat: true, label: "НӨАТ-тэй", price: prices.withVat },
                { vat: false, label: "НӨАТ-гүй", price: prices.withoutVat },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  aria-pressed={withVat === opt.vat}
                  onClick={() => setWithVat(opt.vat)}
                  className={`h-11 md:h-12 rounded-lg border text-xs md:text-sm font-semibold transition-colors ${
                    withVat === opt.vat
                      ? "border-[#002672] bg-[#002672] text-white"
                      : "border-[#E5E5E5] bg-white text-[#0B0B0B] hover:border-[#002672]"
                  }`}
                >
                  {opt.label} · {formatMnt(opt.price)}
                </button>
              ))}
            </div>
          </div>

          {/* Үр дүн */}
          <div className="rounded-xl bg-[#F4F4F4] px-4 md:px-6 py-4 md:py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-xs md:text-sm font-bold tracking-wide text-[#002672]">
                ХЭРЭГЦЭЭТ БЛОКИЙН ТОО
              </p>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs md:text-sm text-[#0B0B0B]">
                  Нийт м³
                </span>
                <span className="text-sm md:text-lg font-bold text-[#0B0B0B]">
                  {result.totalVolume.toFixed(2)} м³
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs md:text-sm text-[#0B0B0B]">
                  Блокийн тоо ширхэг
                </span>
                <span className="text-sm md:text-lg font-bold text-[#0B0B0B]">
                  {result.pieces.toLocaleString("en-US")} ширхэг
                </span>
              </div>
            </div>

            <div className="h-[2px] bg-[#002672] w-full" />

            <div className="flex flex-col gap-2">
              <p className="text-xs md:text-sm font-bold tracking-wide text-[#002672]">
                НИЙТ ДҮН
              </p>
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs md:text-sm text-[#0B0B0B]">
                  НИЙТ м³ x НЭГЖ ҮНЭ
                </span>
                <span className="text-[11px] md:text-sm text-[#666] text-right">
                  {result.totalVolume.toFixed(2)} x {formatMnt(result.unitPrice)}
                  <br />
                  <span className="text-[10px] md:text-xs">
                    /{withVat ? "НӨАТ-тэй" : "НӨАТ-гүй"} үнэ/
                  </span>
                </span>
              </div>
              <p className="text-xl md:text-3xl font-bold text-[#C81127] text-right">
                {formatMnt(result.totalPrice)}
              </p>
            </div>
          </div>

          {/* Үйлдлүүд */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={reset}
              className="h-11 md:h-12 px-6 rounded-lg border border-[#E5E5E5] text-sm font-semibold text-[#0B0B0B] hover:border-[#002672]"
            >
              Цэвэрлэх
            </button>
            <a
              href="tel:99002454"
              className="flex-1 h-11 md:h-12 px-6 rounded-lg bg-[#C81127] text-white text-sm font-semibold flex items-center justify-center hover:bg-[#a80e20]"
            >
              Захиалга өгөх: 9900 2454
            </a>
          </div>

          <p className="text-[10px] md:text-xs text-[#666] leading-relaxed">
            Тооцоолол нь барилгын периметрийн ханын талбайгаас цонх, хаалганы
            талбайг хассан ойролцоо утга бөгөөд эцсийн үнийн санал биш болно.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CalculatorButton = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 h-12 px-6 md:px-8 rounded-full bg-[#002672] text-white text-sm md:text-base font-bold hover:bg-[#001a52] transition-colors ${className}`}
      >
        <CalcIcon />
        Тооцоолуур
      </button>
      {open ? <Calculator onClose={() => setOpen(false)} /> : null}
    </>
  );
};
