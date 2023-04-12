import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ProductItem = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <Box
      sx={{ border: "1px solid #eee",'&:hover':{boxShadow:theme=>theme.shadows[1]} }}
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
    >
      <Stack>
        <Box width="100" sx={{ position: "relative", aspectRatio: "1/1" }}>
          <Link href="/">
            <Image
              src="/images/products/padorin.webp"
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
              alt=""
            />
          </Link>
        </Box>
        <Stack p={2}>
          <Link href="/">
            <Typography>
              افزونه حمل‌ونقل پادروپین | Shipping Plugin Podropin dafadsfasdfasf
            </Typography>
          </Link>
          <Typography
            component="p"
            variant="caption"
            mt={1}
            sx={{
              userSelect: "none",
              overflow:'clip',
              height: showDetail ? "100px" : "0px",
              visibility: showDetail ? "visible" : "hidden",
              transition: "all ease 0.3s",
            }}
          >
            افزونه حمل و نقل حرفه‌ای ارسال کالای پادروپین به فروشگاه‌های
            ووکامرسی کمک می‌کند تا صفر تا صد فرآیند ارسال کالا را در پیشخوان
            وردپرس‌ خود مدیریت کنند. همه فروشگاه‌های اینترنتی با افزودن این
            افزونه به قالب وردپرسی خود به سادگی می‌توانند سفارش‌های خود را با ۶
            شرکت‌ پستی متنوع ارسال کنند
          </Typography>
        </Stack>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          p={2}
        >
          <Box
            display="flex"
            width="50%"
            gap={1}
            justifyContent="space-between"
          >
            <Box>
              <Typography
                component="span"
                variant="subtitle2"
                fontWeight="bold"
              >
                1746
              </Typography>{" "}
              <Typography
                variant="caption"
                color="text.secondary"
                component="span"
              >
                دانلود
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography
                component="span"
                variant="subtitle2"
                fontWeight="bold"
              >
                3.29
              </Typography>
              <AiFillStar style={{ color: "orange" }} />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Typography
            component="span"
            width="50%"
            textAlign="end"
            variant="h6"
            fontWeight="regular"
          >
            رایگان
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductItem;
