package com.glodon.dao;

import com.glodon.entity.Employee;
import com.glodon.utils.DataSourceUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

/**
 * 数据访问类
 */
public class EmployeeDao {
    /**
     * 通过工具类来得到数据源对象，然后传递给QueryRunner对象
     */
    private QueryRunner runner = new QueryRunner(DataSourceUtils.getDataSource());
    /**
     * 查询所有员工
     */
    public List<Employee> findAllEmployees(){
        try{
            return  runner.query("select * from employ",new BeanListHandler<>(Employee.class));
        }catch(SQLException e){
            throw new RuntimeException(e);
        }
    }
}

