"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useData } from "./utils/dataProvider";

const WindowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

let openingSeq = 0;
const newOpening = () => ({ id: `op-${++openingSeq}`, w: "", h: "", qty: "1" });

// Нэг нээлхийн талбай = өргөн x өндөр x ширхэг
const openingArea = (row) =>
  toNumber(row.w) * toNumber(row.h) * toNumber(row.qty);

const sumOpenings = (rows) =>
  rows.reduce((acc, row) => acc + openingArea(row), 0);

const countOpenings = (rows) =>
  rows.reduce(
    (acc, row) =>
      acc + (toNumber(row.w) > 0 && toNumber(row.h) > 0 ? toNumber(row.qty) : 0),
    0
  );

const NumberField = ({ id, label, value, onChange, placeholder = "0.0" }) => (
  <div className="flex flex-col gap-2 w-full">
    <label
      htmlFor={id}
      className="text-xs md:text-sm font-semibold text-[#0B0B0B]"
    >
      {label}
    </label>
    <input
      id={id}
      type="number"
      inputMode="decimal"
      min="0"
      step="0.01"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-11 md:h-12 rounded-lg border border-[#E5E5E5] px-3 md:px-4 text-sm md:text-base text-[#0B0B0B] placeholder:text-[#B5B5B5] outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
    />
  </div>
);

/* Цонх/хаалганы хэсэг: хэмжээ (өргөн x өндөр) ба ширхэгээр оруулна */
const OpeningsSection = ({ title, icon, rows, setRows }) => {
  const total = sumOpenings(rows);

  const update = (id, key, value) =>
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );

  const remove = (id) =>
    setRows((prev) =>
      prev.length > 1 ? prev.filter((row) => row.id !== id) : prev
    );

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0B0B0B]">
          {icon}
          {title}
        </span>
        <span className="text-xs md:text-sm font-bold text-[#002672]">
          {total.toFixed(2)} м²
        </span>
      </div>

      {/* Багана нэрс (зөвхөн дэлгэц том үед) */}
      <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_auto_32px] gap-2 items-center px-1">
        <span className="text-[11px] text-[#666]">Өргөн, м</span>
        <span className="text-[11px] text-[#666]">Өндөр, м</span>
        <span className="text-[11px] text-[#666]">Ширхэг</span>
        <span className="text-[11px] text-[#666] w-[70px] text-right">
          Талбай
        </span>
        <span />
      </div>

      {rows.map((row, i) => (
        <div
          key={row.id}
          className="grid grid-cols-3 sm:grid-cols-[1fr_1fr_1fr_auto_32px] gap-2 items-center"
        >
          <input
            aria-label={`${title} ${i + 1} өргөн, метр`}
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder="Өргөн, м"
            value={row.w}
            onChange={(e) => update(row.id, "w", e.target.value)}
            className="h-11 w-full rounded-lg border border-[#E5E5E5] px-3 text-sm text-[#0B0B0B] placeholder:text-[#B5B5B5] outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
          />
          <input
            aria-label={`${title} ${i + 1} өндөр, метр`}
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder="Өндөр, м"
            value={row.h}
            onChange={(e) => update(row.id, "h", e.target.value)}
            className="h-11 w-full rounded-lg border border-[#E5E5E5] px-3 text-sm text-[#0B0B0B] placeholder:text-[#B5B5B5] outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
          />
          <input
            aria-label={`${title} ${i + 1} ширхэг`}
            type="number"
            inputMode="numeric"
            min="0"
            step="1"
            placeholder="Ширхэг"
            value={row.qty}
            onChange={(e) => update(row.id, "qty", e.target.value)}
            className="h-11 w-full rounded-lg border border-[#E5E5E5] px-3 text-sm text-[#0B0B0B] placeholder:text-[#B5B5B5] outline-none focus:border-[#002672] focus:ring-1 focus:ring-[#002672]"
          />
          <span className="col-span-2 sm:col-span-1 text-xs text-[#666] sm:w-[70px] sm:text-right">
            = {openingArea(row).toFixed(2)} м²
          </span>
          <button
            type="button"
            onClick={() => remove(row.id)}
            disabled={rows.length === 1}
            aria-label={`${title} ${i + 1} мөрийг устгах`}
            className="justify-self-end w-8 h-8 rounded-lg flex items-center justify-center text-[#666] hover:bg-[#F4F4F4] hover:text-[#C81127] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#666]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setRows((prev) => [...prev, newOpening()])}
        className="self-start text-xs md:text-sm font-semibold text-[#002672] hover:underline"
      >
        + {title} нэмэх
      </button>
    </div>
  );
};

/* Сонгосон блокийг харьцаа зөвтэйгээр 3 хэмжээст харуулна (CSS 3D, нэмэлт сан шаардахгүй) */
const Block3D = ({ size }) => {
  const [rot, setRot] = useState({ x: -18, y: -32 });
  const dragRef = useRef(null);

  const SCALE = 1 / 3; // 600мм -> 200px
  const w = (size?.length || 600) * SCALE; // X тэнхлэг: урт
  const h = (size?.height || 300) * SCALE; // Y тэнхлэг: өндөр
  const d = (size?.thickness || 240) * SCALE; // Z тэнхлэг: зузаан

  const startDrag = (e) => {
    dragRef.current = { x: e.clientX, y: e.clientY, rotX: rot.x, rotY: rot.y };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handleMove = (e) => {
    const start = dragRef.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    setRot({
      x: Math.max(-85, Math.min(85, start.rotX - dy * 0.5)),
      y: start.rotY + dx * 0.5,
    });
  };

  const endDrag = (e) => {
    dragRef.current = null;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const faceBase = {
    position: "absolute",
    left: "50%",
    top: "50%",
    border: "1px solid #D8D8D8",
    boxSizing: "border-box",
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div
        role="img"
        aria-label={`${size?.label || "Блок"} гурван хэмжээст загвар`}
        onPointerDown={startDrag}
        onPointerMove={handleMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="w-full h-[220px] md:h-[240px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none rounded-xl bg-[radial-gradient(circle_at_center,_#ffffff,_#ECECEC)]"
        style={{ perspective: "900px", touchAction: "none" }}
      >
        <div
          style={{
            width: w,
            height: h,
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            transition: dragRef.current ? "none" : "transform 0.15s ease-out",
          }}
        >
          {/* Урд / хойд тал (урт x өндөр) */}
          <div
            style={{
              ...faceBase,
              width: w,
              height: h,
              background: "#FAFAFA",
              transform: `translate(-50%, -50%) translateZ(${d / 2}px)`,
            }}
          />
          <div
            style={{
              ...faceBase,
              width: w,
              height: h,
              background: "#E4E4E4",
              transform: `translate(-50%, -50%) rotateY(180deg) translateZ(${
                d / 2
              }px)`,
            }}
          />
          {/* Хажуу талууд (зузаан x өндөр) */}
          <div
            style={{
              ...faceBase,
              width: d,
              height: h,
              background: "#D5D5D5",
              transform: `translate(-50%, -50%) rotateY(90deg) translateZ(${
                w / 2
              }px)`,
            }}
          />
          <div
            style={{
              ...faceBase,
              width: d,
              height: h,
              background: "#D5D5D5",
              transform: `translate(-50%, -50%) rotateY(-90deg) translateZ(${
                w / 2
              }px)`,
            }}
          />
          {/* Дээд / доод тал (урт x зузаан) */}
          <div
            style={{
              ...faceBase,
              width: w,
              height: d,
              background: "#FFFFFF",
              transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${
                h / 2
              }px)`,
            }}
          />
          <div
            style={{
              ...faceBase,
              width: w,
              height: d,
              background: "#C9C9C9",
              transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(${
                h / 2
              }px)`,
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] md:text-xs text-[#666]">
        <span>
          Урт <b className="text-[#0B0B0B]">{size?.length}мм</b>
        </span>
        <span>
          Өндөр <b className="text-[#0B0B0B]">{size?.height}мм</b>
        </span>
        <span>
          Зузаан <b className="text-[#0B0B0B]">{size?.thickness}мм</b>
        </span>
      </div>
      <p className="text-[10px] text-[#999]">Чирж эргүүлнэ үү</p>
    </div>
  );
};

export const Calculator = ({ onClose }) => {
  const { blockSizes, blockPrice } = useData();
  const sizes = useMemo(
    () => (Array.isArray(blockSizes) ? blockSizes : []),
    [blockSizes]
  );
  const prices = useMemo(
    () => blockPrice || { withVat: 0, withoutVat: 0 },
    [blockPrice]
  );

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [windows, setWindows] = useState(() => [newOpening()]);
  const [doors, setDoors] = useState(() => [newOpening()]);
  const [sizeName, setSizeName] = useState(sizes[sizes.length - 1]?.name || "");
  const [withVat, setWithVat] = useState(true);
  const [copied, setCopied] = useState(false);

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
    const windowsArea = sumOpenings(windows);
    const doorsArea = sumOpenings(doors);
    const openings = windowsArea + doorsArea;

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
      grossWallArea,
      windowsArea,
      doorsArea,
      openings,
      netWallArea,
      totalVolume,
      pieces,
      unitPrice,
      totalPrice: totalVolume * unitPrice,
      // Нээлхий нь ханын талбайгаас их байвал өгөгдөл буруу байна
      openingsTooLarge: grossWallArea > 0 && openings >= grossWallArea,
    };
  }, [length, width, height, windows, doors, selectedSize, withVat, prices]);

  const reset = () => {
    setLength("");
    setWidth("");
    setHeight("");
    setWindows([newOpening()]);
    setDoors([newOpening()]);
    setCopied(false);
  };

  const copySummary = async () => {
    const text = [
      "MonBlox блокийн тооцоо",
      `Барилга: ${toNumber(length)}м x ${toNumber(width)}м x ${toNumber(
        height
      )}м`,
      `Цонх: ${countOpenings(windows)} ширхэг / ${result.windowsArea.toFixed(
        2
      )} м²`,
      `Хаалга: ${countOpenings(doors)} ширхэг / ${result.doorsArea.toFixed(
        2
      )} м²`,
      `Ханын цэвэр талбай: ${result.netWallArea.toFixed(2)} м²`,
      `Блок: ${selectedSize?.label || "-"}`,
      `Нийт эзэлхүүн: ${result.totalVolume.toFixed(2)} м³`,
      `Блокийн тоо: ${result.pieces.toLocaleString("en-US")} ширхэг`,
      `Нэгж үнэ (${withVat ? "НӨАТ-тэй" : "НӨАТ-гүй"}): ${formatMnt(
        result.unitPrice
      )}`,
      `Нийт дүн: ${formatMnt(result.totalPrice)}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
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
        className="relative w-full max-w-[980px] my-auto bg-white rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Толгой хэсэг */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-4 md:px-8 py-4 md:py-5 border-b border-[#E5E5E5] bg-white rounded-t-2xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 md:px-8 py-5 md:py-6">
          {/* ЗҮҮН БАГАНА: оролт */}
          <div className="flex flex-col gap-5 md:gap-6">
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

            <div className="h-px bg-[#E5E5E5]" />

            <OpeningsSection
              title="Цонх"
              icon={<WindowIcon />}
              rows={windows}
              setRows={setWindows}
            />

            <div className="h-px bg-[#E5E5E5]" />

            <OpeningsSection
              title="Хаалга"
              icon={<DoorIcon />}
              rows={doors}
              setRows={setDoors}
            />

            <div className="h-px bg-[#E5E5E5]" />

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
          </div>

          {/* БАРУУН БАГАНА: 3D загвар ба үр дүн */}
          <div className="flex flex-col gap-5 md:gap-6">
            <Block3D size={selectedSize} />

            {result.openingsTooLarge ? (
              <p className="rounded-lg bg-[#FDECEE] border border-[#F5C2C7] px-4 py-3 text-xs md:text-sm text-[#C81127]">
                Цонх, хаалганы нийт талбай ханын талбайгаас их байна. Оруулсан
                хэмжээгээ шалгана уу.
              </p>
            ) : null}

            {/* Ханын талбайн задаргаа */}
            <div className="rounded-xl border border-[#E5E5E5] px-4 md:px-6 py-4 flex flex-col gap-2">
              <p className="text-xs md:text-sm font-bold tracking-wide text-[#002672] mb-1">
                ХАНЫН ТАЛБАЙ
              </p>
              {[
                ["Нийт ханын талбай", `${result.grossWallArea.toFixed(2)} м²`],
                [
                  `Цонх (${countOpenings(windows)} ш)`,
                  `− ${result.windowsArea.toFixed(2)} м²`,
                ],
                [
                  `Хаалга (${countOpenings(doors)} ш)`,
                  `− ${result.doorsArea.toFixed(2)} м²`,
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-xs md:text-sm text-[#666]">
                    {label}
                  </span>
                  <span className="text-xs md:text-sm text-[#0B0B0B]">
                    {value}
                  </span>
                </div>
              ))}
              <div className="h-px bg-[#E5E5E5] my-1" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs md:text-sm font-semibold text-[#0B0B0B]">
                  Цэвэр талбай
                </span>
                <span className="text-sm md:text-base font-bold text-[#0B0B0B]">
                  {result.netWallArea.toFixed(2)} м²
                </span>
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
                    {result.totalVolume.toFixed(2)} x{" "}
                    {formatMnt(result.unitPrice)}
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
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="h-11 md:h-12 px-4 rounded-lg border border-[#E5E5E5] text-sm font-semibold text-[#0B0B0B] hover:border-[#002672]"
                >
                  Цэвэрлэх
                </button>
                <button
                  type="button"
                  onClick={copySummary}
                  className="h-11 md:h-12 px-4 rounded-lg border border-[#E5E5E5] text-sm font-semibold text-[#0B0B0B] hover:border-[#002672]"
                >
                  {copied ? "Хуулагдлаа ✓" : "Тооцоог хуулах"}
                </button>
              </div>
              <a
                href="tel:99002454"
                className="h-11 md:h-12 px-6 rounded-lg bg-[#C81127] text-white text-sm font-semibold flex items-center justify-center hover:bg-[#a80e20]"
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
