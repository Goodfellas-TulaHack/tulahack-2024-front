import Restoran from "@/components/Restoran.tsx";
import { Button, Flex, ScrollArea, Tabs } from "@mantine/core";
import { useMobileQuery } from "@/components/media.tsx";
import { IconCirclePlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import RestrauntEditCreate from "@/components/restrauntEditor/restraunt.edit.create.tsx";
import {
  getListAdminRest,
  getOneRestoranAdmin,
} from "@api/admin/admin.restraunt.api.ts";
import RestrauntEditScheme from "@/components/restrauntEditor/restraunt.edit.scheme.tsx";
import { useUserId } from "@/utils/hooks/useUserId.ts";
import RestrauntEditPhotos from "@/components/restrauntEditor/restraunt.edit.photos.tsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import RestrauntEditMenu from "@/components/restrauntEditor/restraunt.edit.menu.tsx";
import RestrauntEditHome from "@/components/restrauntEditor/restraunt.edit.home";

const restrauntEdit = () => {
  const isMobile = useMobileQuery();

  const [isCreate, setIsCreate] = useState<boolean>(false);
  const userId = useUserId();

  const { data, isLoading } = useQuery({
    queryKey: ["getListRestraunAdmin", userId],
    queryFn: () => getListAdminRest(userId),
  });

  const queryClient = useQueryClient();

  const [restId, setRestId] = useState<string | null>(null);

  const [tab, setTab] = useState<string>("Домашняя страница");

  const { data: restData } = useQuery({
    queryKey: ["getListRestoran", restId],
    queryFn: () => getOneRestoranAdmin(restId ? restId : ""),
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["menu", "tables"] });
  }, [restId]);

  return (
    <Flex w={"100dvw"}>
      <Flex
        justify={"flex-start"}
        align={"center"}
        h={"100dvh"}
        pt={30}
        pb={30}
        direction="column"
        gap={20}
      >
        <Button
          onClick={() => setIsCreate(true)}
          h={50}
          w={"80%"}
          leftSection={<IconCirclePlus size={18} />}
        >
          Добавить ресторан
        </Button>
        <ScrollArea>
          <Flex
            justify={"center"}
            align={"center"}
            w={isMobile ? "100%" : "400px"}
            direction="column"
            gap={20}
          >
            {data?.map((item: IRestData) => (
              <Restoran
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                address={item.address}
                raiting={item.raiting ? item.raiting : 0}
                isSelectable={true}
                isSelected={item.id === restId}
                onClick={() => setRestId(item.id ? item.id : null)}
                id={item.id ? item.id : ""}
              />
            ))}
          </Flex>
        </ScrollArea>
      </Flex>
      {isCreate ? (
        <RestrauntEditCreate setIsNew={setIsCreate} />
      ) : (
        <Flex direction={"column"} p={30}>
          {restId && (
            <>
              <Tabs
                value={tab}
                onChange={(e) => setTab(e ? e : "")}
                w={"calc(100dvw - 550px)"}
              >
                <Tabs.List grow>
                  <Tabs.Tab value="Домашняя страница">
                    Домашняя страница
                  </Tabs.Tab>
                  <Tabs.Tab value="Описание">Описание</Tabs.Tab>
                  <Tabs.Tab value="Галлерея">Галлерея</Tabs.Tab>
                  <Tabs.Tab value="Меню">Меню</Tabs.Tab>
                  <Tabs.Tab value="Схема">Схема</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              <Flex
                mt={20}
                gap={20}
                direction="column"
                align={"center"}
                justify={"center"}
              >
                {tab === "Схема" && (
                  <RestrauntEditScheme
                    schemeId={restData?.schemeId ? restData.schemeId : ""}
                  />
                )}
                {tab === "Описание" && (
                  <RestrauntEditCreate
                    setIsNew={setIsCreate}
                    restData={restData}
                  />
                )}
                {tab === "Галлерея" && <RestrauntEditPhotos />}
                {tab === "Меню" && <RestrauntEditMenu restId={restId} />}
                {tab === "Домашняя страница" && (
                  <RestrauntEditHome restId={restId} />
                )}
              </Flex>
            </>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default restrauntEdit;
