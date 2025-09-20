import cream1 from "../assets/images/cream1.avif";
import cream2 from "../assets/images/cream2.avif";
import cream3 from "../assets/images/cream3.avif";
import nightCream1 from "../assets/images/nightCream1.avif";
import nightCream2 from "../assets/images/nightCream2.avif";
import nightCream3 from "../assets/images/nightCream3.avif";
import glowCream1 from "../assets/images/glowCream1.avif";
import glowCream2 from "../assets/images/glowCream3.avif";
import glowCream3 from "../assets/images/glowCream2.avif";
import bodyLotion1 from "../assets/images/bodyLotion1.avif";
import bodyLotion2 from "../assets/images/bodyLotion2.avif";
import bodyLotion3 from "../assets/images/bodyLotion3.avif";
import luxLotion1 from "../assets/images/luxLotion1.avif";
import luxLotion2 from "../assets/images/luxLotion2.avif";
import luxLotion3 from "../assets/images/luxLotion3.avif";
import smooth1 from "../assets/images/smoothLotion1.avif";
import smooth2 from "../assets/images/smoothLotion2.avif";
import smooth3 from "../assets/images/smoothLotion3.avif";
import serum1 from "../assets/images/serum1.avif";
import serum2 from "../assets/images/serum2.avif";
import serum3 from "../assets/images/serum3.avif";
import bright1 from "../assets/images/bright1.avif";
import bright2 from "../assets/images/bright2.avif";
import bright3 from "../assets/images/bright3.avif";
import collagen1 from "../assets/images/collagen1.avif";
import collagen2 from "../assets/images/collagen2.avif";
import collagen3 from "../assets/images/collagen3.avif";
import sun1 from "../assets/images/sun1.avif";
import sun2 from "../assets/images/sun2.avif";
import sun3 from "../assets/images/sun3.avif";
import aloe1 from "../assets/images/aloe1.avif";
import aloe2 from "../assets/images/aloe2.avif";
import aloe3 from "../assets/images/aloe3.avif";
import mineral1 from "../assets/images/mineral1.avif";
import mineral2 from "../assets/images/mineral2.webp";
import mineral3 from "../assets/images/mineral3.avif";
import herbal1 from "../assets/images/herbal1.avif";
import herbal2 from "../assets/images/herbal2.avif";
import herbal3 from "../assets/images/herbal3.avif";
import argan1 from "../assets/images/argan1.avif";
import argan2 from "../assets/images/argan2.avif";
import argan3 from "../assets/images/argan3.avif";
import cocunut1 from "../assets/images/coc1.avif";
import cocunut2 from "../assets/images/coc2.avif";
import cocunut3 from "../assets/images/coc3.avif";

export const ProductsList = [
  // Creams
  {
    id: 1,
    title: "Moisturizing Cream",
    basicDesc: "Hydrates skin with lasting nourishment.",
    explainedDesc: [
      "Deep hydration for all skin types.",
      "Lightweight, non-greasy formula absorbs quickly.",
      "Infused with natural botanical extracts.",
      "Daily use keeps skin soft and radiant.",
    ],
    ratedBy: 230,
    actualPrice: 600,
    discountedPrice: 450,
    discountPercent: 25,
    category: "cream",
    mainImage: cream1,
    sliderImages: [cream1, cream2, cream3],
    reviews: [
      {
        customerName: "Ayesha",
        reviewText: "Perfect for daily use, my skin feels so soft.",
      },
      {
        customerName: "John",
        reviewText: "Lightweight and absorbs fast, no greasy feel.",
      },
      {
        customerName: "Sana",
        reviewText: "Keeps my skin moisturized all day long.",
      },
    ],
  },
  {
    id: 2,
    title: "Night Repair Cream",
    basicDesc: "Restores skin overnight naturally.",
    explainedDesc: [
      "Packed with herbal extracts for healing.",
      "Repairs dull and tired skin overnight.",
      "Boosts elasticity and reduces wrinkles.",
      "Wake up with smoother, glowing skin.",
    ],
    ratedBy: 390,
    actualPrice: 700,
    discountedPrice: 500,
    discountPercent: 28,
    category: "cream",
    mainImage: nightCream1,
    sliderImages: [nightCream1, nightCream2, nightCream3],
    reviews: [
      {
        customerName: "Amir",
        reviewText: "Saw visible changes within 2 weeks.",
      },
      {
        customerName: "Elena",
        reviewText: "Really helps with fine lines and dryness.",
      },
      {
        customerName: "Ali",
        reviewText: "Feels luxurious and refreshing on skin.",
      },
    ],
  },
  {
    id: 3,
    title: "Bright Glow Cream",
    basicDesc: "Restores natural glow to skin.",
    explainedDesc: [
      "Targets dullness and uneven texture.",
      "Vitamin-rich formula enhances brightness.",
      "Non-sticky cream for daily use.",
      "Leaves skin glowing and youthful.",
    ],
    ratedBy: 155,
    actualPrice: 650,
    discountedPrice: 550,
    discountPercent: 15,
    category: "cream",
    mainImage: glowCream1,
    sliderImages: [glowCream1, glowCream2, glowCream3],
    reviews: [
      { customerName: "Fatima", reviewText: "Really brightened my skin tone." },
      { customerName: "Sophia", reviewText: "Great texture and absorbs well." },
      {
        customerName: "Hassan",
        reviewText: "Good for daily skincare routine.",
      },
    ],
  },

  // Lotions
  {
    id: 4,
    title: "Hydrating Body Lotion",
    basicDesc: "Soft, silky skin all day.",
    explainedDesc: [
      "Moisturizes dry skin instantly.",
      "Silky finish without greasiness.",
      "Enriched with natural oils.",
      "Gentle for everyday use.",
    ],
    ratedBy: 310,
    actualPrice: 500,
    discountedPrice: 400,
    discountPercent: 20,
    category: "lotion",
    mainImage: bodyLotion1,
    sliderImages: [bodyLotion1, bodyLotion2, bodyLotion3],
    reviews: [
      { customerName: "Maya", reviewText: "Makes my skin so smooth." },
      { customerName: "Umar", reviewText: "Perfect after shower moisturizer." },
      { customerName: "Grace", reviewText: "Love the light fragrance." },
    ],
  },
  {
    id: 5,
    title: "Luxury Lotion",
    basicDesc: "Rich lotion for nourished skin.",
    explainedDesc: [
      "Deeply nourishes and repairs skin.",
      "Premium formula with essential oils.",
      "Non-greasy and smooth finish.",
      "Leaves skin silky and radiant.",
    ],
    ratedBy: 275,
    actualPrice: 700,
    discountedPrice: 550,
    discountPercent: 21,
    category: "lotion",
    mainImage: luxLotion1,
    sliderImages: [luxLotion1, luxLotion2, luxLotion3],
    reviews: [
      { customerName: "Lina", reviewText: "Feels luxurious and smooth." },
      { customerName: "Zeeshan", reviewText: "My go-to body lotion now." },
      { customerName: "Emma", reviewText: "Worth every penny." },
    ],
  },
  {
    id: 6,
    title: "Soothing Aloe Lotion",
    basicDesc: "Aloe-based skin comfort.",
    explainedDesc: [
      "Soothes irritation and redness.",
      "Infused with natural aloe vera.",
      "Light texture, fast absorption.",
      "Leaves skin calm and cool.",
    ],
    ratedBy: 180,
    actualPrice: 450,
    discountedPrice: 350,
    discountPercent: 22,
    category: "lotion",
    mainImage: smooth1,
    sliderImages: [smooth1, smooth2, smooth3],
    reviews: [
      { customerName: "Sara", reviewText: "So refreshing on hot days." },
      { customerName: "David", reviewText: "Helped my dry patches instantly." },
      { customerName: "Noor", reviewText: "Best soothing lotion I’ve tried." },
    ],
  },

  // Serums
  {
    id: 7,
    title: "Anti-Age Serum",
    basicDesc: "Reduces signs of aging.",
    explainedDesc: [
      "Minimizes fine lines visibly.",
      "Boosts elasticity naturally.",
      "Fast-absorbing lightweight formula.",
      "Leaves skin firm and fresh.",
    ],
    ratedBy: 400,
    actualPrice: 950,
    discountedPrice: 750,
    discountPercent: 21,
    category: "serum",
    mainImage: serum1,
    sliderImages: [serum1, serum2, serum3],
    reviews: [
      { customerName: "Iqra", reviewText: "Lines reduced in 3 weeks." },
      { customerName: "Omar", reviewText: "Best serum for aging skin." },
      { customerName: "Lisa", reviewText: "Leaves my skin so smooth." },
    ],
  },
  {
    id: 8,
    title: "Brightening Serum",
    basicDesc: "Glow booster serum.",
    explainedDesc: [
      "Restores glow naturally.",
      "Fades dullness gradually.",
      "Vitamin-packed lightweight formula.",
      "Gives healthy youthful look.",
    ],
    ratedBy: 360,
    actualPrice: 1000,
    discountedPrice: 850,
    discountPercent: 15,
    category: "serum",
    mainImage: bright1,
    sliderImages: [bright1,bright2,bright3],
    reviews: [
      { customerName: "Aria", reviewText: "Skin looks brighter instantly." },
      { customerName: "Moiz", reviewText: "Good glow effect daily." },
      { customerName: "Hina", reviewText: "I feel more confident now." },
    ],
  },
  {
    id: 9,
    title: "Collagen Serum",
    basicDesc: "Firms and strengthens skin.",
    explainedDesc: [
      "Boosts collagen production.",
      "Improves firmness gradually.",
      "Reduces sagging naturally.",
      "Leaves skin supple and youthful.",
    ],
    ratedBy: 210,
    actualPrice: 1100,
    discountedPrice: 950,
    discountPercent: 14,
    category: "serum",
    mainImage: collagen1,
    sliderImages: [collagen1,collagen2,collagen3],
        reviews: [
      { customerName: "Adeel", reviewText: "Skin feels tighter and smooth." },
      { customerName: "Nadia", reviewText: "Noticeable change in elasticity." },
      { customerName: "Chris", reviewText: "A must for aging concerns." },
    ],
  },

  // Sunscreens
  {
    id: 10,
    title: "Sun Protection Lotion",
    basicDesc: "Shields skin from UV.",
    explainedDesc: [
      "Blocks UVA and UVB rays.",
      "Non-greasy lightweight texture.",
      "Moisturizes while protecting.",
      "Great for outdoor use.",
    ],
    ratedBy: 295,
    actualPrice: 450,
    discountedPrice: 350,
    discountPercent: 22,
    category: "sunscreen",
    mainImage: sun3,
    sliderImages: [sun1,sun2,sun3],
    reviews: [
      { customerName: "Sasha", reviewText: "Keeps me protected daily." },
      { customerName: "Bilal", reviewText: "Not sticky at all." },
      { customerName: "Mariam", reviewText: "Affordable and effective." },
    ],
  },
  {
    id: 11,
    title: "Aloe Vera Sunscreen",
    basicDesc: "Soothes while protecting.",
    explainedDesc: [
      "Calms redness naturally.",
      "Shields skin from sunburn.",
      "Hydrating lightweight formula.",
      "Gentle for sensitive skin.",
    ],
    ratedBy: 330,
    actualPrice: 700,
    discountedPrice: 550,
    discountPercent: 21,
    category: "sunscreen",
    mainImage: aloe1,
    sliderImages: [aloe1,aloe2,aloe3],
    reviews: [
      { customerName: "Noah", reviewText: "Perfect for sensitive skin." },
      { customerName: "Iqbal", reviewText: "Cooling and protective." },
      { customerName: "Anna", reviewText: "I use it every day." },
    ],
  },
  {
    id: 12,
    title: "Mineral Sunscreen",
    basicDesc: "Natural mineral shield.",
    explainedDesc: [
      "Safe for all skin types.",
      "Protects with zinc oxide.",
      "Non-irritating and light.",
      "Leaves no white cast.",
    ],
    ratedBy: 200,
    actualPrice: 750,
    discountedPrice: 600,
    discountPercent: 20,
    category: "sunscreen",
    mainImage: mineral1,
    sliderImages: [mineral1,mineral2,mineral3],
    reviews: [
      { customerName: "Zara", reviewText: "Best mineral sunscreen." },
      { customerName: "Leo", reviewText: "Doesn’t leave white marks." },
      { customerName: "Mehwish", reviewText: "Safe for my sensitive skin." },
    ],
  },

  // Oils
  {
    id: 13,
    title: "Herbal Oil",
    basicDesc: "Nourishes skin and hair.",
    explainedDesc: [
      "Natural blend of herbs.",
      "Moisturizes deeply daily.",
      "Strengthens hair naturally.",
      "Soothes dry skin patches.",
    ],
    ratedBy: 340,
    actualPrice: 750,
    discountedPrice: 600,
    discountPercent: 20,
    category: "oil",
    mainImage: herbal2,
    sliderImages: [herbal1,herbal2,herbal3],
    reviews: [
      { customerName: "Fatimah", reviewText: "Good for my hair fall." },
      { customerName: "Imran", reviewText: "Works on scalp dryness." },
      { customerName: "Ella", reviewText: "Multipurpose and effective." },
    ],
  },
  {
    id: 14,
    title: "Argan Oil",
    basicDesc: "Moisturizes hair deeply.",
    explainedDesc: [
      "Rich in essential nutrients.",
      "Repairs damaged hair strands.",
      "Adds shine and smoothness.",
      "Perfect for frizz control.",
    ],
    ratedBy: 420,
    actualPrice: 950,
    discountedPrice: 800,
    discountPercent: 16,
    category: "oil",
    mainImage: argan2,
    sliderImages: [argan1,argan2,argan3],
    reviews: [
      { customerName: "Leena", reviewText: "My hair feels silky." },
      { customerName: "Kashif", reviewText: "Stopped breakage gradually." },
      { customerName: "Rita", reviewText: "Best oil I’ve used." },
    ],
  },
  {
    id: 15,
    title: "Coconut Oil",
    basicDesc: "Organic care oil.",
    explainedDesc: [
      "Multipurpose skin and hair oil.",
      "Organic and safe to use.",
      "Soothes scalp and skin.",
      "Affordable and natural option.",
    ],
    ratedBy: 260,
    actualPrice: 500,
    discountedPrice: 400,
    discountPercent: 20,
    category: "oil",
    mainImage: cocunut1,
    sliderImages: [cocunut1,cocunut2,cocunut3],
    reviews: [
      { customerName: "Haleema", reviewText: "Best organic oil." },
      { customerName: "Raj", reviewText: "Use it daily on hair." },
      { customerName: "Olivia", reviewText: "Natural and safe product." },
    ],
  },
];
