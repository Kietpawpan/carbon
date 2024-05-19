# Carbon Reduction
_A Case Study on ZPOT Kaeokla for You Project_

## Background
Based on Thailand’s population, the country was estimated to emit around 2,887.04 tonCO2eq/day or 1.05 million tons/year due to plastic waste. These emissions contribute to global GHG emissions, highlighting the need to __control plastic consumption and improve waste management practices__.[^1] How?

__Kaeokla for You__ is a carbon emision reduction and CO<sub>2</sub> reduction project by Zoological Park Organization of Thailand (ZPOT). The positive impact on carbon reduction from the project can be evaluated using CO<sub>2</sub> Evaluator, a web app for evaluating the potential atmospheric carbon reduction and the potential carbon emission reduction due to plastic-cup resue for seeding. The app has been deployed at https://esc.mnre.go.th/app/co2/

The outcomes of the Kaeokla for You Project can be displayed as follows:

```mermaid
flowchart LR
    A[Used plastic cups] -->C[Wasted]
    C -->D{Collected by Kaoekla for You?}
    D-->|yes| E[Reuse for Seeding]
    D-->|yes| J[No burning]
    J-->K[carbon emission reduction]
    E -->F[Plantation]
    F-->G[Carbon sequestration]
    D-->|no| H[burning]
    H-->I[carbon emission]
```
Considering both carbon emission reduction and carbon sequestration, we have:

## Carbon Emission Reduction (CER)
> _CER = c * w * e_    

where,
- _CER_ is carbon emision reduction (tonCO<sub>2</sub>eq)
- _c_ is the number of burned plastic cups (cups)
- _w_ is the weight of one plastic cup (0.015 kg) 
- _e_ is the average emission factor from plastic cup burning (3.54 kgCO<sub>2</sub>eq/kg).

## Carbon Reduction (CR)
> _CR = n * m * t * 1/d * s_

where,
- _CR_ is carbon reduction due to sequestration (tonCO<sub>2</sub>eq/year)
- _n_ is the number plastic cups collected (cups/month)
- _m_ is the number of months per year (12 months/year)
- _t_ is the number of plant seed per cup (seed/cup) 
- _d_ is the plantation density (200 trees/Rai)
- _s_ is carbon reduction rate due to sequestration (tonCO<sub>2</sub>eq/Rai/year), which depends on tree species and the suitability of the plantation sites[^2], expressed in JavaScript as follows:
  
```
var cr = "";
if(tree=="sak" && area=="much"){cr=2.16;}
else if(tree=="yuka" && area=="much"){cr=6.09;}
else if(tree=="thepha" && area=="much"){cr=6.09;}
else if(tree=="narong" && area=="much"){cr=4.4;}
else if(tree=="yak" && area=="much"){cr=6.49;}

else if(tree=="sak" && area=="moderate"){cr=1.72;}
else if(tree=="yuka" && area=="moderate"){cr=4.77;}
else if(tree=="thepha" && area=="moderate"){cr=4.4;}
else if(tree=="narong" && area=="moderate"){cr=3.48;}
else if(tree=="yak" && area=="moderate"){cr=4.8;}

else if(tree=="sak" && area=="less"){cr=1.36;}
else if(tree=="yuka" && area=="less"){cr=3.15;}
else if(tree=="thepha" && area=="less"){cr=4.00;}
else if(tree=="narong" && area=="less"){cr=2.27;}
else if(tree=="yak" && area=="less"){cr=0.77;}

else{cr=0;}
```

## Hypotheses
1. Plastic cups are 15 g each.
2. All the plastic cups are subject to open burning.
3. Carbon reduction is equivalent to carbon sequestration.

[^1]: Kittithammavong, V., Khanitchaidecha, W., and P. Thongsanit. 2023. CO2 Emissions from Plastic Consumption Behaviors in Thailand. [Sustainability 15(16):12135](https://www.mdpi.com/2071-1050/15/16/12135)
[^2]: TGO (2559, [PDF](https://esc.mnre.go.th/app/co2/Tree_version02.pdf)).
