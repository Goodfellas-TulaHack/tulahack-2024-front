import {Group, rem, SimpleGrid, Text} from "@mantine/core";
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconPhoto, IconUpload, IconX} from "@tabler/icons-react";
import '@mantine/dropzone/styles.css';


const restrauntEditPhotos = () => {

    return(
        <SimpleGrid cols={4}>
            <Dropzone
                maxSize={5 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                p={50}
            >
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <IconUpload
                            style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                            stroke={1.5}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                            stroke={1.5}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconPhoto
                            style={{ width: rem(52), height: rem(52), color: '#1C7ED6' }}
                            stroke={1.5}
                        />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" c="#1C7ED6" inline>
                            Перетащи картинку
                        </Text>
                        <Text size="sm" c="#1C7ED6" inline mt={7}>
                        </Text>
                    </div>
                </Group>
            </Dropzone>
        </SimpleGrid>
    )
}
export default restrauntEditPhotos

