<script lang="ts" setup>
import {
  NAvatar,
  NButton,
  NCard,
  NGrid,
  NGridItem,
  NImage,
  NSpace,
  NTabPane,
  NTabs,
  NText,
} from 'naive-ui'
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
</script>
<template>
  <NTabs type="line" animated>
    <NTabPane name="development-team" tab="Development Team">
      <br />
      <NGrid :cols="2" :y-gap="25" item-responsive>
        <NGridItem span="2 l:1">
          <NCard>
            <NSpace :size="[25, 25]">
              <NAvatar
                src="https://media.licdn.com/dms/image/v2/D5603AQHDhAMbz7Jcig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721964602907?e=1755734400&v=beta&t=pybjEL3cDmDLi9VlV2SERZ9-tjh4e-AfeY9OgkgpJ3I"
                :size="150"
                round
              ></NAvatar>
              <section>
                <NText strong as="h1">Mochammad Dinta Alif Syaifuddin</NText>
                <NText>Research author | Software Developer</NText>
              </section>
            </NSpace>
          </NCard>
        </NGridItem>
        <NGridItem span="2 l:1">
          <NCard>
            <NSpace :size="[25, 25]">
              <NAvatar
                src="https://media.licdn.com/dms/image/v2/D5603AQFBryTypX5dXA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716430202272?e=1755734400&v=beta&t=4XNxx9AHzYox-NbUxsgD8B3Rao_9NOiCca4WPkujJng"
                :size="150"
                round
              ></NAvatar>
              <section>
                <NText strong as="h1">Mizanul Ridho Aohana</NText>
                <NText>Machine Learning Engineer | Tensorflow Developer Certified</NText>
              </section>
            </NSpace>
          </NCard>
        </NGridItem>
        <NGridItem span="2 l:1">
          <NCard>
            <NSpace :size="[25, 25]">
              <NAvatar
                src="https://if.unram.ac.id/wp-content/uploads/2022/11/9-1.png"
                :size="150"
                round
              ></NAvatar>
              <section>
                <NText strong as="h1">Fitri Bimantoro</NText>
                <NText>AI Expert | Assistant Professor & Lecturer at University of Mataram</NText>
              </section>
            </NSpace>
          </NCard>
        </NGridItem>
        <NGridItem span="2 l:1">
          <NCard>
            <NSpace :size="[25, 25]">
              <NAvatar
                src="https://if.unram.ac.id/wp-content/uploads/2022/11/22.png"
                :size="150"
                round
              ></NAvatar>
              <section>
                <NText strong as="h1">Ramaditia Dwiyansaputra</NText>
                <NText>AI Expert | Assistant Professor & Lecturer at University of Mataram</NText>
              </section>
            </NSpace>
          </NCard>
        </NGridItem>
      </NGrid>
    </NTabPane>
    <NTabPane name="Poster" tab="Poster">
      <NImage
        src="https://raw.githubusercontent.com/dxxta/Cheating-Detection-API/main/media/poster.png"
        height="500"
      ></NImage>
    </NTabPane>
    <NTabPane name="Paper" tab="Paper">
      <div :style="{ width: '100vw', height: '50vh' }">
        <VPdfViewer
          src="https://raw.githubusercontent.com/dxxta/Cheating-Detection-API/main/media/paper.pdf"
        />
      </div>
    </NTabPane>
  </NTabs>
</template>
