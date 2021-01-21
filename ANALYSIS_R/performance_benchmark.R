library(ggplot2)


choropleth = data.frame(group = "Choropleth Map", value=c(128, 45, 48, 38, 71, 55, 57, 37, 49, 67))

gsm = data.frame(group = "Graduaded Symbol Map", value=c(73, 72, 39, 35, 36, 53, 35, 35, 35, 35))

choriented = data.frame(group = "Choriented Map", value=c(57, 108, 44, 59, 42, 78, 41, 47, 41, 41))

choriented_mobile = data.frame(group = "Choriented Mobile Map", value=c(46, 37, 37, 35, 35, 38, 36, 36, 72, 42))


df.plot = rbind(choropleth, gsm, choriented, choriented_mobile)

p = ggplot(
  df.plot, 
  aes(x=group, y=value, fill=group),
) + geom_boxplot(show.legend = F) +  scale_x_discrete(guide = guide_axis(n.dodge = 2))
p + labs(
  y = "Time (in milliseconds)",
  x = "Visualization",
  title= "Average time for rendering a visualization in the prototype",
  subtitle = "Mobile device: OnePlus 6T"
)
