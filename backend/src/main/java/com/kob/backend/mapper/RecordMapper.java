package com.kob.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kob.backend.pojo.Record;
import com.sun.prism.impl.Disposer;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface RecordMapper extends BaseMapper<Record> {
}
