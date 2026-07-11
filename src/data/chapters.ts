export interface ChapterSample {
  bookId: number;
  chapterTitle: string;
  chapterSubtitle: string;
  paragraphs: string[];
}

export const bookChapters: Record<number, ChapterSample> = {
  1: {
    bookId: 1,
    chapterTitle: "Chapter 1: Harvesting the Sky",
    chapterSubtitle: "The Physics and Logic of Gravity-Fed Rain Capture",
    paragraphs: [
      "Every square foot of roof surface is a potential collector of pristine, soft, chlorine-free water. Yet, most modern homes treat rain as a hazard to be directed away from foundations as quickly as possible. When you transition off-grid, this mindset must be reversed. Water is your lifeblood, and capturing it at its source is the first major step toward total independence.",
      "The math of rain capture is surprisingly generous. A simple rule of thumb to commit to memory is the Rain Harvest Formula: 1 inch of rain falling on a 1,000 square foot roof yields approximately 623 gallons of highly treatable water. Even in arid climates receiving just 10 inches of rain annually, a modest cottage roof can capture over 6,000 gallons. In wetter regions, that same roof can easily yield 30,000 to 50,000 gallons per year.",
      "However, capturing water is only half the battle. To turn roof run-off into safe potable water, you must design a system that accounts for atmospheric debris, pollen, bird droppings, and organic matter. This is where the 'first-flush diverter' comes in. A first-flush diverter is a simple PVC pipe assembly that isolates and discards the first few gallons of a storm—the portion containing 95% of the surface pollutants—before directing clean water into your storage tanks.",
      "By installing a mechanical first-flush system coupled with a high-capacity food-grade polyethylene storage cistern, you create a robust, resilient water utility. With a basic multi-stage mechanical sediment filter and secondary activated carbon filtration, this captured skywater can easily exceed city tap standards, providing you with refreshing, chemical-free water for a lifetime."
    ]
  },
  2: {
    bookId: 2,
    chapterTitle: "Chapter 1: Siting and Soil",
    chapterSubtitle: "The Foundation of Freedom",
    paragraphs: [
      "A cheap piece of land is only cheap if you don't have to spend fifty thousand dollars correcting its geological flaws. When seeking a homestead site for a budget cabin build, you must look beyond the aesthetic beauty of mountain views and pristine streams. You must look at the dirt, the slope, and the path of the winter sun.",
      "Before you drive a single stake into the ground or pour a cup of concrete, you must perform a 'perc test' (percolation test) to evaluate the soil’s drainage capacity. Sandy loams drain beautifully, whereas heavy clays act as watertight bowls, holding moisture against your foundation and rotting timber columns within years. Siting your cabin on elevated, well-draining terrain is the single best insurance policy against mold, rising damp, and structural shift.",
      "Passive solar alignment is your primary heating utility. In the northern hemisphere, your cabin's long axis should run exactly East-to-West. Your largest windows must face true South. This alignment ensures that during the winter months, when the sun is low in the sky, solar heat penetrates deep into your living space, warming thermal masses like concrete or stone floors. In summer, when the sun is directly overhead, a simple 18-inch roof overhang completely shades these windows, keeping your cabin cool without active air conditioning.",
      "By understanding the microclimates of your parcel—the frost pockets in valley floors, the prevailing wind channels, and the natural drainage swales—you can position your structure to work in harmony with nature. A cabin placed in the right spot practically heats, cools, and protects itself, costing pennies to maintain while providing a secure sanctuary."
    ]
  },
  3: {
    bookId: 3,
    chapterTitle: "Chapter 1: Permaculture Zoning",
    chapterSubtitle: "Designing the Self-Renewing Food Forest",
    paragraphs: [
      "A common mistake of the novice homesteader is the 'scattered layout'—putting the chicken coop a hundred yards north, the vegetable garden fifty yards east, and the woodpile down the hill. After a single freezing winter of hauling feed and splitting firewood in the dark, this error becomes painfully apparent. Permaculture design solves this through Zone Planning.",
      "Zone 0 is the house itself—the energetic core. Zone 1 is the area directly outside your door, containing items requiring daily, intensive care: salad herbs, kitchen compost, and small seedling beds. Zone 2 houses your laying hens, larger vegetable plots, and delicate dwarf fruit trees. Zone 3 extends to pasture and main crop areas (potatoes, corn, grains). Zone 4 contains managed woodland and foraging zones, while Zone 5 is wild nature—the space where you observe and learn.",
      "By structuring your homestead in concentric rings of intensity, you minimize wasted physical labor. If your chickens are in Zone 2, they are close enough to receive kitchen scraps from Zone 1 daily, and their high-nitrogen manure can easily be integrated into your main compost piles to fuel next spring's crops.",
      "This web of beneficial connections is the secret to a thriving off-grid property. When every component performs multiple functions—such as chickens scratching weeds, turning compost, consuming pests, and producing eggs—you cease to be a stressed-out farm laborer and instead become the conductor of a beautiful, self-sustaining biological orchestra."
    ]
  },
  4: {
    bookId: 4,
    chapterTitle: "Chapter 1: The Sovereignty Audit",
    chapterSubtitle: "Quantifying Your Resource Independence",
    paragraphs: [
      "Most modern citizens have no idea what it actually takes to keep them alive for twenty-four hours. They flip a switch, and light appears; they turn a metal valve, and water flows. To begin your journey to self-sufficiency, you must first demystify these inputs. You must measure and catalog your daily metabolic and mechanical footprints.",
      "The average American consumes roughly 80 to 100 gallons of water per day and utilizes about 30 kilowatt-hours of electricity. On a self-sufficient homestead, these numbers are absurdly high and structurally unsustainable on a modest budget. The first phase of the Blueprint is not buying bigger solar panels; it is the aggressive, elegant conservation of energy and water.",
      "By introducing high-efficiency fixtures, LED lighting, a high-performing composting toilet, and simple greywater recycling loops, you can drop your daily water requirement to under 15 gallons per person, and your electrical footprint to under 3 kilowatt-hours—all without sacrificing standard modern comfort.",
      "Once your footprints are minimized, the task of generating your own power and water becomes incredibly cheap and simple. A small 1,200-watt solar array and two 250-gallon water cisterns are suddenly more than enough to cover your entire household's needs indefinitely. Sovereignty is not about living in deprivation; it is about absolute efficiency and elegant design."
    ]
  }
};
