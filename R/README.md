# R Notebooks for processing the Geodata

> Check the `.html` notebooks for rendered views.

## Description

> TBD; see [API-Access.md](./data/API-Access.md)

## Contents

+ Berlin Base := 00
+ Air Quality := 01
+ Traffic Accidents (Bikes) := 02
+ FixMyBerlin Road Segments := 03
+ Uber Rides := 04
+ Classification := 05
+ Local Demo := 06

## System: R SessionInfo()

```
R version 3.6.1 (2019-07-05)
Platform: x86_64-w64-mingw32/x64 (64-bit)
Running under: Windows 10 x64 (build 18362)

Matrix products: default

locale:
[1] LC_COLLATE=English_United States.1252  LC_CTYPE=English_United States.1252   
[3] LC_MONETARY=English_United States.1252 LC_NUMERIC=C                          
[5] LC_TIME=English_United States.1252    

attached base packages:
[1] stats     graphics  grDevices utils     datasets  methods   base     

other attached packages:
 [1] geojsonsf_1.3.0 mapdeck_0.2.1   sf_0.7-7        forcats_0.4.0   stringr_1.4.0   dplyr_0.8.3    
 [7] purrr_0.3.2     readr_1.3.1     tidyr_1.0.0     tibble_2.1.3    ggplot2_3.2.1   tidyverse_1.2.1

loaded via a namespace (and not attached):
 [1] tidyselect_0.2.5   xfun_0.9           haven_2.1.1        lattice_0.20-38    jsonify_0.2.1     
 [6] colorspace_1.4-1   vctrs_0.2.0        generics_0.0.2     htmltools_0.3.6    base64enc_0.1-3   
[11] yaml_2.2.0         rlang_0.4.0        e1071_1.7-2        pillar_1.4.2       glue_1.3.1        
[16] withr_2.1.2        DBI_1.0.0          modelr_0.1.5       readxl_1.3.1       lifecycle_0.1.0   
[21] munsell_0.5.0      gtable_0.3.0       cellranger_1.1.0   rvest_0.3.4        htmlwidgets_1.3   
[26] evaluate_0.14      knitr_1.24         class_7.3-15       broom_0.5.2        Rcpp_1.0.2        
[31] KernSmooth_2.23-15 scales_1.0.0       backports_1.1.4    classInt_0.4-1     jsonlite_1.6      
[36] hms_0.5.1          packrat_0.5.0      digest_0.6.21      stringi_1.4.3      grid_3.6.1        
[41] cli_1.1.0          tools_3.6.1        magrittr_1.5       lazyeval_0.2.2     crayon_1.3.4      
[46] pkgconfig_2.0.3    zeallot_0.1.0      xml2_1.2.2         lubridate_1.7.4    rmarkdown_1.15    
[51] assertthat_0.2.1   httr_1.4.1         rstudioapi_0.10    R6_2.4.0           units_0.6-4       
[56] nlme_3.1-140       compiler_3.6.1  
```