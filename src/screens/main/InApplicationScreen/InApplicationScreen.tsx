import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {containerStyle} from '../../../styles/containerStyle';
import {AgEnum, Text} from '../../../components/ui/Text';
import {Header} from '../../../components/ui/Header';
import Carousel from 'react-native-snap-carousel';
import {DimensionHelper} from '../../../helpers/DimensionHelper';

const images = [
  {
    id: 1,
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 2,
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhUZGRgZGhgaGBoZGB4YGRoYGBkZGhgaGBgcIS4lHB4rHxgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzErJCE0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND00NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEsQAAIBAgMEBgYGBwYCCwAAAAECEQADBBIhBTFBUQYiYXGRsRMyQoGhwRRScrLR8BUjM2KCkuEWQ6LC0vFzdAckJTRTVGODo7Pi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAlEQACAgICAwACAwEBAAAAAAAAAQIRAxIhMRNBUTJhInGhkQT/2gAMAwEAAhEDEQA/AD00qbNdrmOk7Xa5SoAcDXabXRQB0VawluTmO4fE1WRZMUQDQIFNCZI71GTTS9NmmIdXK5NKgBUqVdoAVKlXaBHKVdiuxTAbSp0UoooBtKnRSiihDYrkU+KUU6AZFKKfFKKAGRXIp8VygBsUiKdFKKAI4ppFSmo2FFDGNUF66FEn8Se4VO1QXknSY5xvjlPCpYwNc2hckwjfD8KVFpA5UqWv7HY2u1ylSGOFKa5XaAHTSrlTYe3Op3DzoAltrA7TXSaTGuUyTs10GmiuimA+kK4KcKAO0hXa6BQI4BTgKQFKKaQhRSinAV2KYWMilFPilFOhWMilFSRSiigsjilFSZaWWnQrI4pRUmWllooLI4pRT8tKKKCxkUop8U00UFjSKiens8UOxG17Kkg3Ekb1BzN4LJpMaLLVXuPQvE7fTXIjNHPqj5n4UKxm1bx9XKmhOgzHhxOnHlUsoNXDJOo8B+FKsBe2hfzH9a2/sFKihWek12lXakoVKlSpAPRZMVa3CBUNvQV0vQBLNcpganA0wHinAUwGnqaYDgKcBXBThQI6BSAroFNbEIHCF1DkSFkZiOYXeRVCHgV0CnAV0CmIaBTopwFKKYhsV2K7FKKdAcilFOiuUUAopRTXcKJJAHM6ChOL6S4ZN91SeSS5/wAMge+mAYiuGshiOnC7rdlm7XIQeAk0IxPSbFv6pVB+4uvi00rA9DZwN9C8Z0gw1v1ryTyU5z4LNee30uXNblx3+0xI8DoKSYEDhRYUabFdNk1Fu07nmxCD5n4UIxPSnFP6mRB+6uY+LSPhVZcKOVPFjspWOihibl65+0uO3YWMfy7qv9HsAMz6fUHiSflTvo/ZRvo7hx1tR6yceU/jSb4BdkD4YDPpy8qZibO/7J+8lGsRhx+s+0BVbG2oLaewfNags8/vL1j3nzrtS316zacT50qdio9HDV3NVoYenrhRU0OynNWMHh85LHcPiauJhF4isptnHYi3fdbdzKgy5VgECVBPxk++h0uxrno1n0QVw4LtrIWukeLXfkbvWPiDVu10vvAw9hToD1WPGeY7KNohrI0ZwZphwrcqFW+ma+3YcdxVqt2+l2GO8uv2kPmKE4sVSLHojyroQ0+10gwr7r6TyJyn41dt37T+q6HuYH51VIVsogU8GiH0ZTyppwop0KymppjopdWIEhWgxqNV3GrhwpqF8Oc6/ZbzWnQrHA08Go2UjgaGbT2ylgS+Y6wAqkmTJ7uFABgUprJr0jvP+ysAD6zvH+FR864wxVz17+Qcrahf8Rk/GnshUau5eVRLMFHMkAeJoTiek2GTQXM55IC/xXT40GTYSEy5Zzzdi5+NWDbs2+KL3kClsPU5iOlTn9nhm77jBf8ACJ86D4nbeMfTOqDki/NpNW8XtjDLp6VJ5A5j4CgmJ25a9hHczGiEeE0cg6I7uGdzNx3c/vMW86emBA4VJb+lv+zwbxzeVHx0q3b6P7QfebVsd8n4TVqE30iHOKK6YXspPkX1mUe+iC9Bbr/tcWx5hFPnIqy3QHCojOzXHZVY6sN4BI4VawS+E+aJnH2nZHtT3CfKov0uD6ltm8q1uxthWDgPTG2C7W3YsSSZGYCBMDcKP7AwCCxbYIgJRSSFAJMbyYk0LFbr9BLLSPOLbYp/UsHvgt8qtW9gY99/UH8K/Ama9MZCKaE7RXRH/wA0fbMXnl8MDZ6C3W9e/wC4Mx+G6tb0a6J28OpAcks8tCgahT2nlRDLV/Abv4j900ZMMYxtBDLJyK77PthXME/rF3nmU5R9Y07aeEQJdhFkWmgxJHr7ideAqa76j/8AEXztVJj0lbvbaI+L1zao3tniWJt9du8+dKtBiNn9Zu80q57NzbBKlVK7FPUU6JsSrWK6QoPpD/w/cWtyorH7ftg33/h+4tZ5uIl4+wSoHOuogzHXgvm1dNkUrdjrn7K+b1zWbk4szxpXMMIG7ePOprdjt86T2Tpr7Q86mwIvoCneoqC9spJXq7zvH2TRQ2jz+NNey0r3/wCVqFJi4KSYEj1Xde52HkanW5iUIC4h4gnWG3R9YdtWyjDlVW/tFEdc7oshvWYDitWpT9MlpFlNrYtfbRvtJ8xFPt9I8TKlrVtuqdzMu/Ke2n4dkdc+VXXUDK+5iOqwj1gKgtWFhOp7H+mrWSS9iai/RcHSrg+Gf+Fg3nFUNq7Rt4lQiI6uDnh1gFVBBggnXrCnth1k6HhuJ/GmbLtqMTmEytt9CSV9kaqTB38ezlWkMjbpkOKXKBmz8RiXRGs4O4wZVZWdlRCGAIIJOog1YweD2jiC+V7FkI5Q6F2DAKSBAgjrDWa2PRizOCwv/Bt/cFP6PWdcV/zT/ct13RxxpNnLKcrZlR0Kvv8AtsfcPMIgQfEmqO1+hWHteg1uuXvojl7hMqwckQIA9Ua16h6CgPSmz/3X/m7Pk9aawS4RntJvlg/D9HMMnq2E94zfemmbXwyoLIVQo+kWNwAHr9lan6PQfpHZhbH/ADWH+/W0pRUaSISlasvejpejoj6Cl6Cn5Bag70dQ4y3+rf7D/dNF/QVBj7P6t/sP900nk4BR5MxsBJ2YvbafzeiuyBFi2B9QVQ2Gn/ZAP/o3PN6LdHbU4ayf3BWMJK1/RrKPD/seUNN9FRH0FL0FbeRGWoO9FVzCJA/m+7UvoKr4y5kEy24mFUsT2GFb4CajLO4lwjUjt2ArgkCbgiTvhre7nuqziF0f7B83rzjbOPuXS6PaPo2b20YiQyTCOyF+asozqRvWYp+zcU+HtPeS+92ybbZ1d3a5bRbj+qGYQxCuoYlY/egCuWzYCdILmMGIu5MOCmbqlrLkkQN5AM1yqeK2krOzKtwAmQHu4jMPtfrN9Ksi7Zt8T0kVHKMjEiJIAjUA8W7aS9Kk+o/gP9VZTbuMC4h1yOSAmqoWHqLuIqomOBn9Vd0EnqHdIHmRQVwbxOk9v6j+A/1VU2xgrr3WdSMrBCJB+otZH9IiP2V3+T+teiPcJZAsQAueTEKU0jTUzGnbSlFNcjUq6MyNnXxPqn3GmDAXwSYXcBx4T+Naz6ZagHNMs6iBPWQkMPcRFWUsqwBG4iR3UvDH4Hld1Zj1tXx7Cn3mmzdJjIAQQYJPDka2oww5Uvow5UeGPwfkkZJXu8bfg1OZrhI/VHQzvHIj51rfo4FOGHFHgiHkkZUO532m01iRWS6U7IvPeW6ttyHKIQIYqxOVdJgqZHLXfXpmLYAgLGYyB5+QNWUwoIE8hPfGtEMUYu0KUm1yYXZfRI4aHe8xf2rdoDIex80yO3Q8qL2YAUG2wIAHq9mseFaZMMBwrl22AOU6eVXLEpO2TGbRlb+IRZLK4Bj2W+VSbLbM8KDkt27kSNQXKkiTqfV48qN4nCgrB1Mann4VHZQIrAcj5Go8aiy9rRmtqbVvYfBbPeyxU+i627KQEQ9YHQ8aq7F6QYhJfOZd2duqCrOUXMSoHYu4CnbfcDBbNJO62NCYUj0aA5iN2+quxGBskM6zmkTAJzWxmOo5ha7LSSMNbNFgumd5R10W5OoK9VuUdUR8K7tbpNavfRuqyMmKtOynXqgPJDDfv7KCqyFXUrBCoyuAQ4O5wOY3b+R51W2ps2LauudyXWUYENEEsT1QeA17ar+HsmmbjanSq2lp3QF3CkojDKGcDRZ4TQ7aW30v2sKYKub2FuOser1gWE8Y1FZPF7PZMMLhK5HDBijZsjkTlaY1kDcDQHYSN6ZAT/eJpI16wqZygpUuU/8ACIp/8Pbf0/Y+sfCu/wBoLH1j4V5phsa7IztllWCwDGhIE6zzqxbxRZygOgEhiYndpB7THurpWPC657IbyL0ehf2gsfWPhUON29YNtwGMlHA05qawWHxYfcxGsaju5Tzp7vKMQ4I1B4axu1p+LE1wydpp8oP7CxyDZa2ieubVwRHEl4orsXa9q3YtI7QwQTpz1HnWP2acuGQkgDIdOPtbqe7yVAMTbRhOmkR8jWWPHBySb7NJSlTpezefp+x9Y+FL9P2PrHwrBohJADLJ1Go15xzqMOv10nlmEyJ4b+B8K38GL7/pn5J/Dfp0gw5mHmCQdOI3ipBi1uglG0ylZ3a/k15ls5Clgs+4OZjWc0fM1ruid3PZJiOs2kzy4iufJCCimnyzWLls/iMR00U2nYKUYM7HRDnhG67F2klR6pYzqSIjfT2dtjKG9GAEuFA6ls5MFjIICnQkHQb17a9C2lshLqOGEFn6xVQzQrAIqBhAI4SCAZMSZHmm2tj37Fxz6Nim+Q3pCATGV3ygM/GFmK42qNWTYgJmMFt53OAPd1aVAf0g3AkdmXNHvB1pUqDk9NxG17aMUKSVgEnjoD9U86jXbyf+GviR/koDta7F55PFfurVBsV2ig1Nf/aJR/dj+b/8V3aIxTO5tWpV0QK0jTqDUdYcTWEv3gw9cV69gG6ifZT7i0A1RkrOAxubM1oGM0DOqwSAJ3nlR/CXsYEVTh0MCJN4a+C0bWnhqqydVdgk3MZH7G0O+6T5JUeXHn/y4/nNGmcQdaaHFIYJOGxpEG5YH8DGnDB4s78Qg7rf4muY3bQtsQ6lVDRmJ0iAeExvnUUl29bAksCp4qGcdnqqaWysKYm2ReLqWxCkiSP1YAGkbp10NXEwl7T/AKwB3Wh82qiNv2nJyXFBVWJlTAkqBMgEnfoO3lXbe2wN7Ke4yDyNLZJj1bCAwFzjiG9yIPlSfZJJGa/cP8o/y0Ix/S1bLKrowLiVCuDmG6RG7duqfDbXLmUt3+cG2xA36Z4E6d9VsLUJfodTvu3D3sP9Ncu7LQI2VnLQYluPbAqniL+JyllVJldHWCRO8nPoACTumiCKXTMjDOImZRTEAwNYH5NPb9CqvZmtodHL1zC4O2rorWrcPmBdSciLp1dRoaFbM6Mu2cekQG3cKN1JBZUQyF0AGugrZnC3T61/JpoEho/mSq9vAXVLReQBmLEiyuZtAJYgiW01Mcqd/UKgC3RTLqb/ALvRyPi9C9v7Ha2lucT1TcRAxTLkmTnnNwitxkUdV3ZjEyFC6bu2m43Z9m6qh1LBWDiWPrAECYjmab1oVMwWyNj4tnuIUcIwh/SK4W4NcpywetPEHT31NY6GXrbq6iRmXQE5xqCWggaCJ07K3wuU9T7/ACqFQjA4no1eRwttw6EZ8+gQkNGXeesNJBApfoC/JBNrNEkSS2XuVY3jv0o1htrlJyW7aBjqURVJPOIiaOviEEuVUlgJOoJjduPbTjkTLeOSMG2wMSVyixoT6yxMdq5vlNQNsfEAQbbxpMoeB7J0r0LB7TXMQqRAE9YkGZ591Nx+JLsDxiiWRRVjjBydMyeA2M7qsghMoWRAM6zvOnfrUW09h3i8IjZVChW0M9RBGh01BrUzcPrMEXmTLH7IoZtbHFRlViFEk69Y5QTqfdWSz/o08L+gn6JcyrCOjjOcxEZdR1ROm4HdQ21hWdpIlgTMMsQJEsMwI8O+tyt1nRSdCQJjTvokmGzqCqowgRmTQ/zLB762jOzHs85TCOfWJgjRVcRn4EidR3a7q1vRayyWsrRIZpgiN8b/AHUWuYBAOthrEcTlRflUmEsKpKhFQACFUQo46AeNU2F2RoOr/Fz/AH6E9KLD5LhRgP1TDrKCIJ136AaayNaLogyzHtkf/JFUOkeFRlclQxFtiJMwQfZnQGoYzwTF3+u0hSZM5RC+4K0R3UqLY/Zyekb19/GlSsVG0xvRK9cuO+dFDERJYnQAa6dnOmr0Ic776juQnzat1FdC1JZi7XQBD615/wCFVHnNbTDWgqhfqgLvOsKBrFPUVwyCdCe6OXfTsCYRy+dPWOQ8KrlyN8DvYComxaje6e6W8qWyQUXmfQ9xpueh1zaKD2mP2VjzqAbUQ7g572A8ql5I/R6szHTh2NwrnIXqmNWABXeFHavxrKYLBq79W4ZWD1kgEnuYn4Vt9qYRLzy1uc11F3tOQICVzAjQ61V2jslbIX0NhFOV3eD1slvLOrMZ9aYo8kR6sCOrJIcgtMnLuiQI1A4T41ewZiBVLFqzORkcNp1SpzDju37ta7YxAUgGOYlgNB30k0NxZscJigLrRvW3aBM8zcb50Zt7SI4+OtZbZTo4a8hbPcy5wfVXJKpk0+rv1NEJpuQah98ejDrqD8DXMNtCwp6kjsk/Os9ceosL61CkJwRtLjB1zru3H5Gq5anbKaVKE+uDB5Ea1ZXZKe07HwA+A+daozBOKbrr9k/Aj8ajfFAabzyGp8KPNs60d6TvE5m4xPHsFdXDInq9XuiihgTBK7opyNqBvUg/GKsDD3Z9Q+I/GiRv5faBHgaiubTUbte6lSI1MXf2LiVdiLalS7HRxmyliRIJAmDVm07i2q3EZGAAMjTTt3UbxW1gI7wO3UxT7eNXkPf1vOo1iujZyk1yBdnDrOYO5dY09rj76jxuJdiQjRv3a9nurSnGKwIIBB0II0jlVC9szDPvQa/VlfumplHbplQko9mdcBBq5d9cxmfnVHEXczgHiyj5nyrR3OjFg6q7p3MCPAioR0TEgm8xymRCgGd3WOs1EcbTLlkTi0gj9JNpRliQOQnxoVjelF5RpG/lr7qs7Sf51l9o7q0tmSiqLlzbjudT8z4mtthXnX9xD4qDXl9uvSMBc6i/8O39wVpF2RJEiN1P4z/9hqlt5A6uDP7JtzEe0PqkVaw+KT0YEGc8z/7s1Bt7FIc8H+4ucOOYRQB5FjcFcFxoJiTGo/GlV/FXOu3fSqLL1NudvfVTxb8BUbbbfgqj3En4mgqPTvSVzPJL6aqKCn6UuH247gB8qhfEO3rOx72PlVBXPjT8551Lk37K1RaDxV6ylsiXuAd2nzoM0mu20qQoNvi8Mn1n8f6Cqt3biLqlrXmYHlQ82+yoGtGmmGpDjukV4kQFWHzzE9bKV46bjyoRi9s3nMtcbcRwAhokQNCDA8KL3cDmqjc2R2VrGUROLB1/Fs4DMxYnNJJknKNKgweJdDmSJgjrKCIMT5DXsova2YOPaB79KIYfYTMOojHkYMeNPdIlxbLPRvEs1oqyxkgDXvnyHjRYPVbB7Ne2AuSA7gdY6gkHxGlLFo9sjOpHI8D3GqUthVRYczTsINffVO1eBq9hBx/O+gbRpNnxox9kkjhrVm7tIDcaz2JudVexx5GosRjURczuqDmzBfOtNjLUNvtEn/eq9zFnnWPx3TLDpoma4f3RC/zNHwBrP4vpdiX0tqqA8uu38x0+FO2wpHomIxYAJYiIOp/Gszj+ldm0MufOw4J1v8Xq/GskNn4nEmXLv9skgdwOg9wo5szoG7jM5AA3k6D3RqT3UrX0qiliukxcIyqw1U6kHdcAgiOXnRbZHSB7oc6qEYDnOaTMcN3xq4vRtbaEeiceyrAKd7b4DlgDJJ6tRNs42raFbbFrhOdUQkrBhCeYygUWiJN+ibD9LbLEq1wBgSDmBUSDB1IjhRBtuIFzZ0y7yxcBQBGs60HxH/RyH6638rNqQUkBjqY60xPZQnE9AMYn7Nkf7DlG8GgfGih2aH+0zC68ZfRIAMzuFJZcxfKqyxkAHdu+JdduMUzADUaZjoZA1EcNe/SvN8ZsTEK3VZXEkMGkGNxkgmTHZVhdt3rVsI6QqNlRAwOVY9qFGYjLvnWdd1Smn0ytJLtG7xl2aA486UOTpYj+uCPd8hNLF7UtssqwPZI+OulFMOB4aK1Wytpyo0cDKAMxUyFBAZSvsmNOPOsxg8NYur+suTPso2UL797Hwp+AVLQCo5iJM8CZkdw0rSPHYnyazD3+qPtf5zT8Qoe4EO5rbg/zCg+BxEosEHVeOvrmr2Gvn6SgI/u3+DDhUuXAUCL3R25mP6uydd/pbqz7oMUq1+btrlRsyqMQq1IqxSRKmKiuZmpEU7KlQV00re6pGLKa6lscalimslACVNYq3bwTtuU+8R507B41YhVAYbzvJohbLHUmBSL1KI2Yw1YhRxkz5VOmGtDQyx74Hwq86IwI1od6MWBOrGfWYbu4UwUUEEwSBeoijvEj3zvqK0znV+oo56eAqph8U9w6Exz4UVyIyZXJ1EExR2FUNS8hI1kjUHtoJ0h2TiXQtaxDtx9G0AN2AqAAe8e8UUw2zlQZi+duzTwFObHAdg/OhFXGTj2TKKl0eX2NuPbfLcQyN4IyuPcaOXOlyW1ARHdiAdYVRmAIE6mYI4VqMffw7rluhWB4ET4cvdWVfoujvntuTbMBZ3jKAMpPGIGvIitlOLM3GSQIxfSfE3NFIQckHW/mafhFU7Gyrt5sxzMTxcknxNb3AdGkWIT3n8TWhwuy1UcPd+NVt8RFL2efYHogxjP8K1Oz+iiJHV8d9ai3aUDQR+edSKlFN9iv4UsNs5E3CauIQvVOg4cteHfTiIqHE4hUBk6U1wD5Jbg4b55iaA9IMU9kApazjXOMofTeCFO/3U7DY15YodMzFQ2q5Z0H7vdIqa5t5R1btqe1SG8AYjxo2TE4+jLjpfhQIbDZWH1XZG/lZSB4mtb0b2gL9gXAGCktlzMGMLpMjhIPhVQ7SwTGGGVt8OjHympjtexlCC4gA4AEeIiqUiVCjM7eXJefICUJzAgc9SI75qDZfRxMXae4ScwchVII3AEx29bTuo/icdhzALgzuhWM8eAqeztNUXJaUg6y7QNT9VQTPDfHcaxUUpNs6HNuOpgsR0QHsP7jQu9sG5bmRI3adtejMQahZDPCPzypLJJC1ief4XAMDqCD+eVaK/gsjsgYlVIGsHWAT8aPWrAZgIG8edLGWVzNp7VPdsNUgKtjs5/A1LbxZsnOQWyggAkk5TqQDV42OIP5NDtqvkXgWbRe00KQUWP7bYbjcYdhXdSofa6IWSAXHWOrcNTSqv4k0y8ifP5U8rwpqtr4/Kuh65Waj1XSK4DB7PKuhpFNdqAJwY31FiG6pqP04H9aH4/HhRrTim2HRawWI9H1+J8qN4e6bgzTpWWs3w6Ky7j8I0Iopg9o5Dl4U5RNlyjSWnC6mTUl+8joUdJU6EbjHeKDX8eBBLUPvbbQE5WMwd3zJ/Ckr9CaNJevIiAIMqjhw8aFYjaQB9b+vMTQd9tuxKmGVsu/kwjuBBrP3cUzEAkkaETw7KpQb7DhGuPSRVOkkaco14dooXtXahMMsENIOp4Gd3AwR4GgSE5T26eBn51IxJEfvSPeINVqkBYw9wkxJPETv7Qa9E6OYYCyJAOs+MTpXn+CtdYE6c/xr0rZECygHEee75U48yJy8RL4FdyxSj+lce5G8fnvrU5R+b/eul6jmquLueyPfScqHRLiMUBu18KB4+9JzEbuHb2xVpt/H88xVa+M2lZuRSQHv7adAQFWOETOsc6E2trKHzOGI/djfv3GJozi8HNAMTs4nd41UZIbQQs7Us3bxZyAhRUGaF1DA9w486hxKWyZt3JB7GMeAoDew7ARHGfhUuEx960IVjHI6j3Va/RLC+IsAAurPlTTVSsudCAGAgAHypYbaHA8aZexyvh1RZkHrA75Opbt7arWRu0/CjvsDR4fFT+fz+RVtLk0GwiHhR3AYcudRoN/M91ZtFWWcEmuaN24bpPZNQ3hJM8/CjGQBfdQd0HxpNUCdkF6BqTHbQ7Z9r0j+lI6olUnlOp7Pzzp21WZyLK8YL6wQo14fnWi9i2LabgFAk8IA/oPhTSBsdkWlSuXQDBEbuHMTXavWXwnZANTr4/KuE12lXKzU4raxULk76VKgZUu3TuHj30Gx4kSaVKtYdky6I9i4qHyHcxkdjf1HlRbEvAJ7K7Sq5/kXi/EB3brFjqT3maYjUqVUL2WLV0z3R5zXFTWlSqWWiUIBVdsfJyoJjidB+NcpURVim2qoNbP2fetBcTdCumhyz6oMENG4+Yr0TAYhbihgdDHPlx/GlSpIwkXBPPdv4H3Hwp7PI5jX/Y0qVWQVr9zWBVW4CopUqllIZn4Vxlk1ylWbLIbtmqlyzO+lSpDKN/AA1SfZoNKlTTYEa4DKZG8Udt7DVlDqcuYDTgOBjlSpVdslktjZZkSd3Lwovh2Gigbh3Hv5UqVNCZNIKz3R74j4GgmMuZFLeHeedKlQwRV2ThzrcI1eDwmN4Hx8SavYlM2VPrsqEfuswDD+UtSpVWP8kRPpj7+BzsX63WJPrcz30qVKuoxP//Z',
  },
  {
    id: 3,
    image:
      'data:image/jpeg;base64,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',
  },
];

const CarouselItem = ({item}: any) => {
  return (
    <View>
      <Image style={{width: '100%', height: 220}} source={{uri: item.image}} />
    </View>
  );
};

export const InApplicationScreen = () => {
  return (
    <ScrollView>
      <Header />

      <View style={{flex: 1, marginBottom: 16}}>
        <Carousel
          data={images}
          renderItem={CarouselItem}
          sliderWidth={DimensionHelper.width}
          itemWidth={DimensionHelper.width * 0.8}
        />
      </View>

      <View style={containerStyle}>
        <Text Ag={AgEnum.H1}>Сдается</Text>
        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Адресс:
        </Text>
        <Text Ag={AgEnum.Body}>
          г. Казань, улица Боевая, дом 21, квартира 69
        </Text>

        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Данные:
        </Text>
        <Text Ag={AgEnum.Body}>Комнат 3, Общая площадь 68 м², Этаж 5 из 9</Text>

        <Text style={{marginTop: 16}} Ag={AgEnum.H2}>
          Стоимость:
        </Text>
        <Text Ag={AgEnum.Body}>Цена: 22000 ₽</Text>
        <Text Ag={AgEnum.Body}>Залог: 2000 ₽</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
